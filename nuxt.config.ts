// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Game Changer x Spark Education",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
});
