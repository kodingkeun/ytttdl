<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/16/solid';

const props = defineProps({
  thumbnailSrc: String,
  title: String,
  videoUrl: String,
  type: { type: String, default: 'youtube', validator: (value) => ['youtube', 'tiktok'].includes(value) },
})
</script>

<template>
  <div class="relative">
    <img :src="props.thumbnailSrc" :alt="props.title" class="w-full h-64 object-cover rounded inline-block">
    <a :href="props.videoUrl" target="_blank"
      class="bg-white px-2 rounded-full absolute bottom-3 font-semibold text-sm left-3 flex gap-1 items-center">
      <IconsLogoYoutube class="size-4 text-[#FF0000]" />
      {{ props.type === 'youtube' ? 'YouTube' : 'TikTok' }}
      <ArrowUpRightIcon class="size-3 ml-1" />
    </a>
  </div>
</template>