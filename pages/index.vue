<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
import { useApi } from "~/composables/useApi";
const selectedVideo = ref("Choose Resolution");
const apiBaseUrl = process.env.API_BASE_URL;
const isDownloading = ref(false);
const youtubeRegex = /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/;
const form = reactive({
    url: "",
    errors: {
        url: null,
    },
});

const validateUrl = () => {
    if (!form.url) {
        form.errors.url = "Link tidak boleh kosong.";
    } else if (!youtubeRegex.test(form.url)) {
        form.errors.url = `Link harus berupa URL YouTube yang valid. Contoh: https://www.youtube.com/watch?v=[VIDEO_ID]`;
    } else {
        form.errors.url = null;
    }
};
const {
    response: videos,
    request: getVideo,
    pending
} = useApi({
    apiUrl: "/ytdl/info",
});

const handleSubmit = () => {
    validateUrl();
    if (form.errors.url) {
        return;
    }
    getVideo(form.url);
};

const downloadVideo = async (videoUrl) => {
    if (videoUrl === "full-hd") {
        isDownloading.value = true;
        try {
            const res = await $fetch(apiBaseUrl + "/ytdl", {
                method: "POST",
                accept: "application/json",
                body: {
                    url: form.url,
                },
            });
            isDownloading.value = false;
            window.open(res.data.fileUrl, "_blank");
        } catch (error) {
            isDownloading.value = false;
            throw new Error(error);
        }
    } else {
        window.open(videoUrl, "_blank");
    }
};
</script>

<template>
    <div class="flex flex-col gap-5 items-center text-center mt-5">
        <form
            @submit.prevent="handleSubmit"
            class="w-full max-w-[500px] border focus-within:shadow duration-200 flex h-11 p-1 rounded-md gap-2 items-center"
            :class="form.errors.url ? 'border-red-500' : ''"
        >
            <MagnifyingGlassIcon class="size-7 opacity-50 ml-2 flex-none" />
            <input
                type="text"
                class="w-full text-sm outline-none overflow-x-auto"
                placeholder="Masukan link youtube"
                v-model="form.url"
            />
            <button
                type="submit"
                :disabled="pending"
                class="bg-primary hover:bg-primary-600 duration-150 text-white font-medium inline-flex justify-center items-center gap-1.5 h-full rounded-md px-5 disabled:bg-primary-300"
            >
                <IconsSpinner v-if="pending" />
                <span>{{ pending ? "Searching..." : "Search" }}</span>
            </button>
        </form>
        <transition name="fade" enter-from-class="-translate-y-5 opacity-0" enter-to-class="translate-y-0 opacity-100">
            <small v-if="form.errors.url" class="text-red-600 inline-block -mt-3 font-medium">
                {{ form.errors.url }}
            </small>
        </transition>

        <CardPreview v-if="videos && !pending">
            <CardPreviewThumbnail
                :thumbnail-src="videos.data.thumbnails[4].url"
                :title="videos.data.title"
                :video-url="videos.data.video_url"
            />
            <CardPreviewDetail
                :title="videos.data.title"
                :author-url="videos.data.author.url"
                :author-name="videos.data.author.name"
                :author-thumbnail-src="videos.data.author.thumbnails[0].url"
                :video-description="videos.data.description"
                :video-formats="videos.data.formats"
                :downloading="isDownloading"
                @handle-download="downloadVideo(selectedVideo)"
                v-model="selectedVideo"
            />
        </CardPreview>
        <CardPreviewStatus v-else-if="!videos && !pending" status="not-found" />
        <CardPreviewLoading v-else-if="!videos && pending" />
        <CardPreviewStatus v-else status="error" />
    </div>
</template>
