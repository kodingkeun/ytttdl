<script setup>
import {
    HeartIcon,
    ShareIcon,
    PlayIcon,
} from "@heroicons/vue/16/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/vue/24/outline";

const videoEl = ref(null);
const isPlaying = ref(false);
const selectedFormat = ref("Choose Format");
const apiBaseUrl = process.env.API_BASE_URL;
const isDownloading = ref(false);
const regex =  /tiktok\.com|vt\.tiktok\.com/;
const form = reactive({
    url: "",
    errors: {
        url: null,
    },
});

const validateUrl = () => {
    if (!form.url) {
        form.errors.url = "Link tidak boleh kosong!";
    } else if (!regex.test(form.url)) {
        form.errors.url = `Link harus berupa URL TikTok yang valid!`;
    } else {
        form.errors.url = null;
    }
};

const {
    response: video,
    request: getVideo,
    pending,
} = useApi({
    apiUrl: "/tiktok/info",
});

const handleSubmit = () => {
    validateUrl();
    if (form.errors.url) {
        return;
    }
    getVideo(form.url);
};

const handleDownload = async () => {
    if (selectedFormat.value === "mp4-hd") {
        isDownloading.value = true;
        try {
            const res = await $fetch(apiBaseUrl + "/tiktok", {
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
    } else if (selectedFormat.value === "mp4-sd") {
        window.open(video.value.data.result.video, "_blank");
    } else if (selectedFormat.value === "audio") {
        window.open(video.value.data.result.audio, "_blank");
    } else {
        throw new Error("Format not found");
    }
};

const togglePlayPause = () => {
    if (videoEl.value.paused) {
        videoEl.value.play();
        isPlaying.value = true;
    } else {
        videoEl.value.pause();
        isPlaying.value = false;
    }
};
</script>

<template>
    <div class="flex flex-col gap-5 items-center text-center mt-5">
        <InputSearch
            placeholder="Masukan link TikTok"
            v-model="form.url"
            :errors="form.errors.url"
            :loading="pending"
            @submit="handleSubmit"
        />
        <transition
            name="fade"
            enter-from-class="-translate-y-5 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
        >
            <small
                v-if="form.errors.url"
                class="text-red-600 inline-block max-w-full -mt-3 font-medium"
            >
                {{ form.errors.url }}
            </small>
        </transition>

        <div v-if="video && !pending" class="flex flex-col gap-2 items-center">
            <div class="w-full flex gap-3 max-w-xs">
                <div
                    class="flex-1 min-h-[568px] sm:max-h-[500px] rounded-md shadow overflow-hidden relative"
                >
                    <video
                        :src="video.data.result.video"
                        class="size-full object-cover"
                        ref="videoEl"
                        @click="togglePlayPause"
                    > wait.. </video>

                    <button
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        :class="isPlaying ? 'opacity-0' : 'opacity-100'"
                    >
                        <PlayIcon class="size-8 text-white" />
                    </button>
                </div>
                <div
                    class="hidden sm:flex flex-col *:flex *:flex-col *:text-center justify-end gap-3 w-10"
                >
                    <div>
                        <img
                            :src="video.data.result.author.avatar"
                            class="rounded-full size-10"
                            :title="video.data.result.author.nickname"
                        />
                    </div>
                    <div>
                        <span class="rounded-full p-2 size-10 bg-slate-100">
                            <HeartIcon class="size-full" />
                        </span>
                        <h5 class="text-sm">
                            {{ video.data.result.statistics.likeCount }}
                        </h5>
                    </div>
                    <div>
                        <span class="rounded-full p-2 size-10 bg-slate-100">
                            <ChatBubbleLeftEllipsisIcon class="size-full" />
                        </span>
                        <h5 class="text-sm">
                            {{ video.data.result.statistics.commentCount }}
                        </h5>
                    </div>
                    <div>
                        <span class="rounded-full p-2 size-10 bg-slate-100">
                            <ShareIcon class="size-full" />
                        </span>
                        <h5 class="text-sm">
                            {{ video.data.result.statistics.shareCount }}
                        </h5>
                    </div>
                </div>
            </div>

            <form
                @submit.prevent="handleDownload"
                class="flex flex-col gap-1 w-full"
                v-if="video && !pending"
            >
                <InputSelect
                    placeholder="Choose Format"
                    v-model="selectedFormat"
                >
                    <option value="mp4-hd">MP4 - Full HD</option>
                    <option value="mp4-sd">MP4 - SD</option>
                    <option value="audio" v-if="video.data.result.audio">
                        MP3 - SD
                    </option>
                </InputSelect>
                <ButtonDownload :downloading="isDownloading" />
            </form>
        </div>
        <CardPreviewStatus v-else-if="!videos && !pending" status="not-found" />
        <CardPreviewLoading v-else-if="!videos && pending" />
    </div>
</template>
