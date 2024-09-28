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
                @submit.prevent="emits('handleDownload', selectedVideo)"
                class="space-y-2"
            >
                <div class="relative">
                    <select
                        class="block appearance-none w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        v-model="model"
                    >
                        <option disabled selected value="Choose Resolution">
                            Choose Resolution
                        </option>
                        <option value="full-hd">Full HD</option>
                        <template v-if="props.videoFormats">
                            <option
                                v-for="format in props.videoFormats"
                                :value="format.url"
                            >
                                {{
                                    format.container +
                                    " - " +
                                    format.qualityLabel
                                }}
                            </option>
                        </template>
                    </select>
                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                        <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </div>
                </div>
                <button
                    type="submit"
                    class="bg-primary hover:bg-primary-600 disabled:bg-primary/40 duration-150 text-white inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md font-semibold w-full"
                    :disabled="props.downloading"
                >
                    <template v-if="!props.downloading">
                        <CloudArrowDownIcon class="size-6" />
                        <span>Download</span>
                    </template>
                    <template v-else>
                        <svg
                            class="animate-spin size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                class="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="4"
                            ></circle>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        <span>Downloading...</span>
                    </template>
                </button>
            </form>
        </div>
    </div>
</template>
