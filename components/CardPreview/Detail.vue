<script setup>
import { ChevronDownIcon, CloudArrowDownIcon } from "@heroicons/vue/16/solid";

const props = defineProps({
    title: String,
    authorUrl: String,
    authorName: String,
    authorThumbnailSrc: String,
    videoDescription: String,
    videoFormats: Array,
    downloading: Boolean,
});

const emits = defineEmits(["handleDownload"]);
const model = defineModel();

const isDescriptionShow = ref(false);
</script>

<template>
    <div class="flex flex-col gap-3 text-start">
        <h1 class="font-medium">
            {{ props.title }}
        </h1>
        <a :href="props.authorUrl" class="inline-flex items-center gap-1">
            <img
                :src="props.authorThumbnailSrc"
                :alt="props.authorName"
                class="size-8 rounded-full"
            />
            <h1 class="underline text-sm font-medium">
                {{ props.authorName }}
            </h1>
        </a>
        <div class="inline-flex flex-col font-normal gap-2">
            <p :class="!isDescriptionShow ? 'line-clamp-2' : 'line-clamp-none'">
                {{ props.videoDescription }}
            </p>
            <button
                class="font-semibold text-sm flex items-center"
                @click="isDescriptionShow = !isDescriptionShow"
            >
                {{ isDescriptionShow ? "Show Less" : "Show More" }}
                <ChevronDownIcon
                    class="size-5 opacity-80 duration-200"
                    :class="isDescriptionShow ? 'rotate-180' : 'rotate-0'"
                />
            </button>

            <form
                @submit.prevent="emits('handleDownload', model)"
                class="space-y-2"
            >
                <InputSelect
                    placeholder="Choose Resolution"
                    v-model="model"
                    @submit="emits('handleDownload')"
                >
                    <option value="full-hd">Full HD</option>
                    <option
                        v-for="format in props.videoFormats"
                        :value="format.url"
                    >
                        {{ format.container }} - {{ format.qualityLabel }}
                    </option>
                </InputSelect>
                <ButtonDownload
                    :disabled="props.downloading"
                    :downloading="props.downloading"
                />
            </form>
        </div>
    </div>
</template>
