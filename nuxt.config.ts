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

  runtimeConfig: {
    app: {
      FB_API_KEY: "AIzaSyBLB-98Bw3l-JYawkEpPJyQaJ1uKJwbyRk",
      FB_AUTH_DOMAIN: "game-changer-d42b2.firebaseapp.com",
      FB_DATABASE_URL:
        "https://game-changer-d42b2-default-rtdb.asia-southeast1.firebasedatabase.app",
      FB_PROJECT_ID: "game-changer-d42b2",
      FB_STORAGE_BUCKET: "game-changer-d42b2.appspot.com",
      FB_MESSAGING_SENDER_ID: "388560889085",
      FB_APP_ID: "1:388560889085:web:7c94eb91d0c44e3919ca94",
      FB_MEASUREMENT_ID: "G-E4ZVNNC4SN",
    },
  },
});
