<script setup>
import {
    MoonIcon,
    SunIcon,
    Bars3Icon,
    BoltIcon,
    ShieldCheckIcon,
    WrenchIcon,
} from "@heroicons/vue/16/solid";
import LogoYoutube from "~/components/icons/LogoYoutube.vue";
import LogoTiktok from "~/components/icons/LogoTiktok.vue";

const links = [
    { label: "Youtube", url: "/", icon: LogoYoutube },
    { label: "Tiktok", url: "/tiktok", icon: LogoTiktok },
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
        <NuxtLink to="/" class="text-2xl font-bold">YTTT-DL</NuxtLink>
        <ul class="hidden lg:flex gap-5 text-[#323232]">
            <li v-for="link in links">
                <NuxtLink
                    :to="link.url"
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

    <nav
        class="fixed bg-white bottom-0 left-0 w-full flex gap-2 shadow-slate-800/40 shadow rounded-t-lg py-3 px-2 z-50 lg:hidden"
    >
        <template v-for="link in links">
            <NuxtLink
                :to="link.url"
                class="size-full px-3 py-2 gap-1.5 flex justify-center items-center rounded-lg flex-1"
                :class="
                    $route.path === link.url
                        ? 'bg-primary text-white'
                        : 'bg-transparent text-black/50'
                "
            >
                <component :is="link.icon" class="size-6" />
                <span>{{ link.label }}</span>
            </NuxtLink>
        </template>
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
