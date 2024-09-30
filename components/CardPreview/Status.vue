<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
const props = defineProps({
    status: String,
});
</script>

<template>
    <div
        class="min-h-64 mt-7 border dark:border-iron/10 rounded-lg p-4 shadow w-full flex justify-center items-center flex-col"
    >
        <MagnifyingGlassIcon class="size-6 opacity-50" />
        <span class="text-sm text-[#707070] capitalize font-medium">
            {{ status == "not-found" ? "Video not found" : status == "error" && "Something went wrong" }}
        </span>
    </div>
</template>
