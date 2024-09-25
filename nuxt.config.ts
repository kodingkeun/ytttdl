// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: {
              DEFAULT: "#0075FF",
              50: "#B8D8FF",
              100: "#A3CDFF",
              200: "#7AB7FF",
              300: "#52A1FF",
              400: "#298BFF",
              500: "#0075FF",
              600: "#005BC7",
              700: "#00428F",
              800: "#002857",
              900: "#000E1F",
              950: "#000103",
            },
          },
        },
        container: {
          center: true,
          padding: "0.5rem"
        },
        fontFamily: {
          sans: ['Inter']
        },
        boxShadow: {
          DEFAULT: '0 0 16px 1px rgba(0, 0, 0, 0.10)',
        }
      },
    },
  },
});