
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt', 'nuxt-vuefire'],
  app : {
    head : {
      title : 'U Shop',
      meta : [
        {name : 'description' , content :'Easy to use website to buy a random collection of items on the internet'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    },
  },
  vuefire: {
    config: {
      apiKey: "AIzaSyATzgcn6rs8y2BBziefD4mt9kkQqy-ZWJs",
      authDomain: "u-shop-online.firebaseapp.com",
      projectId: "u-shop-online",
      storageBucket: "u-shop-online.appspot.com",
      messagingSenderId: "510309422787",
      appId: "1:510309422787:web:76625514fadfcad93c3476"
    },
  }
})
