import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBLB-98Bw3l-JYawkEpPJyQaJ1uKJwbyRk",
    authDomain: "game-changer-d42b2.firebaseapp.com",
    databaseURL:
      "https://game-changer-d42b2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "game-changer-d42b2",
    storageBucket: "game-changer-d42b2.appspot.com",
    messagingSenderId: "388560889085",
    appId: "1:388560889085:web:7c94eb91d0c44e3919ca94",
    measurementId: "G-E4ZVNNC4SN",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  nuxtApp.vueApp.provide("db", db);
  nuxtApp.provide("db", db);
});
