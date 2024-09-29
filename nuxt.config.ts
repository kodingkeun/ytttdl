// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
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
          animation: {
            spinner: 'spinner 10s ease-in-out infinite'
          },
          keyframes: {
            spinner: {
              "0%": { transform: "translateX(0px) translateY(0px)" },
              "25%": { transform: "translateX(10px) translateY(-10px)" },
              "50%": { transform: "translateX(20px) translateY(0px)" },
              "75%": { transform: "translateX(10px) translateY(10px)" },
              "100%": { transform: "translateX(0px) translateY(0px)" }
            }
          }
        },
        container: {
          center: true,
          padding: "1rem"
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
  vite: {
    define: {
      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
    }
  }
});