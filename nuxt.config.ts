// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app : {
    head : {
      title : 'youronlinevariety',
      meta : [
        {name : 'description' , content :'Easy to use website to buy a random collection of items on the internet'}
      ],
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  },
  runtimeConfig : {
    currencyKey : process.env.CURRENCY_API_KEY
  }
})
