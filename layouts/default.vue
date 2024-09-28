<script setup>
import {
    MoonIcon,
    SunIcon,
    Bars3Icon,
    BoltIcon,
    ShieldCheckIcon,
    WrenchIcon,
} from "@heroicons/vue/16/solid";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const links = [
    { label: "Youtube", link: "/" },
    { label: "Tiktok", link: "/tiktok" },
];

const whyMustUs = [
    {
        icon: BoltIcon,
        title: "Cepat dan Handal",
        description:
            "Dibangun dengan teknologi canggih, YTTTDL menjamin kecepatan unduh yang maksimal tanpa mengurangi kualitas video.",
        iconClass: "bg-[#FF383C]/80",
    },
    {
        icon: ShieldCheckIcon,
        title: "Aman dan Privasi Terjaga",
        description:
            "Kami menjamin privasi pengguna dengan tidak menyimpan data atau video yang Anda unduh. Setiap proses dilakukan secara aman dan terenkripsi.",
        iconClass: "bg-primary",
    },
    {
        icon: WrenchIcon,
        title: "Tanpa Instalasi",
        description:
            "YTTTDL tersedia dalam versi web, sehingga Anda tidak perlu menginstal perangkat lunak tambahan. Cukup akses dari browser favorit Anda.",
        iconClass: "bg-[#FFC700]/80",
    },
];

const isDark = ref(false);
const isMenuOpen = ref(false);
</script>

<template>
    <nav
        class="container flex justify-between items-center md:max-w-4xl xl:max-w-5xl h-8 mt-4"
    >
        <button type="button" @click="isMenuOpen = true" class="lg:hidden">
            <Bars3Icon class="size-6" />
        </button>
        <ul
            class="flex flex-col min-w-full sm:min-w-72 min-h-svh gap-5 text-[#323232] lg:hidden absolute top-0 duration-500 bg-white shadow p-3 *:w-full z-50"
            :class="
                isMenuOpen
                    ? 'left-0 visible opacity-100'
                    : '-left-full invisible opacity-0'
            "
        >
            <li class="border-b pb-2 inline-flex justify-between items-center">
                <NuxtLink to="/" class="text-2xl font-bold">YTTT-DL</NuxtLink>
                <button
                    @click="isMenuOpen = false"
                    type="button"
                    class="size-5"
                >
                    <XMarkIcon class="size-full" />
                </button>
            </li>
            <li v-for="link in links">
                <NuxtLink
                    :to="link.link"
                    class="pb-1 hover:text-primary duration-200 w-full inline-block"
                    :class="$route.path === link.link ? 'text-primary' : ''"
                >
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
        <NuxtLink to="/" class="text-2xl font-bold">YTTT-DL</NuxtLink>
        <ul class="hidden lg:flex gap-5 text-[#323232]">
            <li v-for="link in links">
                <NuxtLink
                    :to="link.link"
                    class="pb-1 hover:border-primary"
                    active-class="border-b-2 border-primary"
                >
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul>
        <button
            class="w-20 h-9 rounded-full border px-1 py-[3px] hover:shadow focus:shadow duration-200 flex items-center justify-between relative"
            type="button"
            @click="isDark = !isDark"
        >
            <span
                class="z-10 w-1/2 inline-grid place-items-center absolute -left-[1px] top-1/2 -translate-y-1/2 duration-200"
                :class="!isDark ? 'scale-0' : ''"
            >
                <MoonIcon class="size-4" />
            </span>
            <span
                class="flex-1 h-full bg-primary py-[2px] px-2 inline-flex items-center text-xs justify-center rounded-full text-white relative z-20 duration-200"
                :class="isDark ? ' translate-x-[calc(50%+0.4rem)]' : ''"
            >
                {{ isDark ? "Dark" : "Light" }}
            </span>
            <span
                class="relative duration-200 z-10 flex-1 inline-grid place-items-center"
                :class="isDark ? 'scale-0' : ''"
            >
                <SunIcon class="size-4" />
            </span>
        </button>
    </nav>
    
    <div class="container md:max-w-4xl xl:max-w-5xl">
        <div class="flex flex-col gap-5 items-center text-center mt-16">
            <h1 class="text-3xl md:text-5xl font-bold">
                {{ $route.path === "/" ? "YouTube" : "TikTok" }} Video
                Downloader
            </h1>
            <p class="text-base text-[#707070] inline-block max-w-lg">
                Download video favorit Anda dalam hitungan detik, tanpa batas
                dan tanpa watermark. Simpan dalam kualitas HD untuk ditonton
                kapan saja!
            </p>
        </div>

        <slot />

        <div class="flex flex-col gap-5 items-center text-center mt-16">
            <div class="text-center space-y-2">
                <h1 class="text-3xl font-bold inline-block max-w-md">
                    Online & Free YouTube Video Downloader
                </h1>
                <p class="text-[#707070]">
                    Website YouTube dan TikTok downloader adalah solusi praktis
                    untuk mengunduh video dari platform video populer seperti
                    YouTube dan TikTok secara cepat dan mudah. Dengan
                    menggunakan layanan ini, pengguna dapat menyimpan video
                    favorit mereka langsung ke perangkat tanpa perlu koneksi
                    internet untuk menontonnya kembali. Fitur downloader ini
                    sangat berguna bagi mereka yang ingin mengakses konten kapan
                    saja, baik untuk keperluan pribadi, pembelajaran, atau
                    hiburan. Selain itu, situs downloader ini mendukung berbagai
                    format dan kualitas video, sehingga pengguna dapat memilih
                    sesuai dengan kebutuhan. Dengan kemudahan dan kecepatan yang
                    ditawarkan, YouTube dan TikTok downloader menjadi alat yang
                    banyak dicari di kalangan pengguna internet.
                </p>
            </div>
        </div>
    </div>

    <div class="bg-primary/10 mt-16">
        <div class="container text-center py-10 space-y-3">
            <h1 class="text-3xl font-bold inline-block max-w-md">
                3 Alasan kenapa harus memilih YTTDL
            </h1>
            <div class="flex flex-col lg:flex-row gap-4 mt-10">
                <div
                    v-for="card in whyMustUs"
                    class="flex-1 flex flex-col items-center justify-center bg-white text-center p-3 rounded-md gap-1"
                >
                    <div
                        class="rounded-full text-white size-8 grid place-items-center"
                        :class="card.iconClass"
                    >
                        <component :is="card.icon" class="size-5" />
                    </div>
                    <h1 class="font-bold">{{ card.title }}</h1>
                    <p>{{ card.description }}</p>
                </div>
            </div>
        </div>
    </div>

    <footer class="mt-20 bg-slate-100 text-center py-5 px-3">
        <h1>
            Made with ❤️ by
            <a href="https://kodingkeun.com" class="text-primary">Kodingkeun</a>
        </h1>
    </footer>
</template>
