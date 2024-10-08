// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "/game-changer",
    buildAssetsDir: "assets",
    head: {
      title: "Game Changer x Spark Education",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/game-changer/logo.png",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon", "nuxt-gtag"],
  gtag: {
    id: "G-E4ZVNNC4SN",
  },
});
