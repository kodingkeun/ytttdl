<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/16/solid";
</script>

<template>
    <div
        class="min-h-64 mt-10 border dark:border-iron/10 rounded-lg p-4 shadow w-full flex justify-center items-center flex-col"
    >
        <MagnifyingGlassIcon class="size-6 opacity-50 animate-spinner" />
        <span class="text-sm text-[#707070] translate-x-4 translate-y-2">
            Searching...
        </span>
    </div>
</template>