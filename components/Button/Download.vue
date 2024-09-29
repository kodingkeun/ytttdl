<script setup>
import { CloudArrowDownIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
    downloading: Boolean,
});
</script>

<template>
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
            <IconsSpinner />
            <span>Downloading...</span>
        </template>
    </button>
</template>
