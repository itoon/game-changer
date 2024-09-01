// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/game-changer",
    buildAssetsDir: "assets",
    head: {
      title: "Game Changer x Spark Education",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/game-changer/favicon.ico",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
});
