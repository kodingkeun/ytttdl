<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Youtube & Tiktok Downloader` : 'Youtube & Tiktok Downloader';
  }
});
const description = 'Free Youtube and Tiktok video downloader. Download videos from Youtube and Tiktok to your phone or computer without any restrictions. Available on English and Bahasa Indonesia.';
const keywords = 'youtube, tiktok, downloader, video, download, free, english, bahasa indonesia, youtubedl, tiktokdl, youtube downloader, tiktok downloader, download youtube video, download tiktok video, free youtube downloader, free tiktok downloader';

useSeoMeta({
  description,
  keywords,
  ogDescription: description
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
