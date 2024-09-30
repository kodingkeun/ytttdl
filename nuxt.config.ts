// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: false },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
    tailwindcss: {
        config: {
            darkMode: "selector",
            theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: "#2963FF",
                            50: "#B8CBFF",
                            100: "#A3BCFF",
                            200: "#7A9EFF",
                            300: "#5281FF",
                            400: "#2963FF",
                            500: "#0045FF",
                            600: "#0036C7",
                            700: "#00278F",
                            800: "#001757",
                            900: "#00081F",
                            950: "#000103",
                        },
                        "primary-content": {
                            DEFAULT: "#CCDFFF",
                            50: "#FFFFFF",
                            100: "#FFFFFF",
                            200: "#FFFFFF",
                            300: "#FFFFFF",
                            400: "#F5F9FF",
                            500: "#CCDFFF",
                            600: "#94BCFF",
                            700: "#5C99FF",
                            800: "#2475FF",
                            900: "#0057EB",
                            950: "#004DCF",
                        },
                        "ebony-clay": {
                            DEFAULT: "#252D42",
                            50: "#7081AF",
                            100: "#6376A7",
                            200: "#516290",
                            300: "#425176",
                            400: "#343F5C",
                            500: "#252D42",
                            600: "#11141E",
                            700: "#000000",
                            800: "#000000",
                            900: "#000000",
                            950: "#000000",
                        },
                        iron: {
                            DEFAULT: "#CFD1D6",
                            50: "#FFFFFF",
                            100: "#FFFFFF",
                            200: "#FFFFFF",
                            300: "#FBFBFC",
                            400: "#E5E6E9",
                            500: "#CFD1D6",
                            600: "#B1B4BC",
                            700: "#9297A2",
                            800: "#747A88",
                            900: "#5B5F6A",
                            950: "#4E515B",
                        },
                    },
                    animation: {
                        spinner: "spinner 10s ease-in-out infinite",
                    },
                    keyframes: {
                        spinner: {
                            "0%": {
                                transform: "translateX(0px) translateY(0px)",
                            },
                            "25%": {
                                transform: "translateX(10px) translateY(-10px)",
                            },
                            "50%": {
                                transform: "translateX(20px) translateY(0px)",
                            },
                            "75%": {
                                transform: "translateX(10px) translateY(10px)",
                            },
                            "100%": {
                                transform: "translateX(0px) translateY(0px)",
                            },
                        },
                    },
                    container: {
                        center: true,
                        padding: "1rem",
                    },
                    fontFamily: {
                        sans: ["Inter"],
                    },
                    boxShadow: {
                        DEFAULT: "0 0 16px 1px rgba(0, 0, 0, 0.10)",
                    },
                },
            },
        },
        cssPath: "~/assets/css/tailwind.css",
    },
    vite: {
        define: {
            "process.env.API_BASE_URL": JSON.stringify(
                process.env.API_BASE_URL
            ),
        },
    }
});
