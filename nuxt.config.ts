// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  app : {
    head : {
      title : 'U Shop',
      meta : [
        {name : 'description' , content :'Easy to use website to buy a random collection of items on the internet'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
})
