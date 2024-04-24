import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
      apiKey: "AIzaSyATzgcn6rs8y2BBziefD4mt9kkQqy-ZWJs",
      authDomain: "u-shop-online.firebaseapp.com",
      projectId: "u-shop-online",
      storageBucket: "u-shop-online.appspot.com",
      messagingSenderId: "510309422787",
      appId: "1:510309422787:web:76625514fadfcad93c3476"
    };

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)
})