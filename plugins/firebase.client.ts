import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  console.log(config);

  const firebaseConfig = {
    apiKey: config.app.FB_API_KEY,
    authDomain: config.app.FB_AUTH_DOMAIN,
    projectId: config.app.FB_PROJECT_ID,
    storageBucket: config.app.FB_STORAGE_BUCKET,
    messagingSenderId: config.app.FB_MESSAGING_SENDER_ID,
    appId: config.app.FB_APP_ID,
    measurementId: config.app.FB_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  nuxtApp.vueApp.provide("db", db);
  nuxtApp.provide("db", db);
});
