<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex  justify-between">
          <NuxtLink to="/" class="font-bold">U Shop</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="btn">Shop</NuxtLink></li>
          </ul>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
<footer class="fixed bottom-0 left-0 z-20 w-full p-1 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-3 md:py-5 dark:bg-gray-800 dark:border-gray-600">
    <div class="w-full mx-auto max-w-screen-xl p-1 md:flex md:items-center md:justify-between">
      <span class="text-sm flex text-gray-500 sm:text-center dark:text-gray-400">© 2024 <p class="hover:underline mx-1"> U Shop™</p>. All Rights Reserved.
    </span>
    <div class="my-3 md:my-0">
      <Nuxt-Link to="/auth/login" v-if="!user.email" class="btn mx-3 px-5 rounded-full"> Login </Nuxt-Link>
          <Nuxt-Link to="/auth/signup" v-if='!user.email' class="btn mx-3 px-5 rounded-full"> Signup </Nuxt-Link>
    </div>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <p class="hover:underline me-4 md:me-6">Privacy Policy</p>
        </li>
        <li>
            <p class="hover:underline me-4 md:me-6">Licensing</p>
        </li>
        <li>
            <p class="hover:underline me-4 md:me-6">Contact</p>
        </li>
    </ul>
    </div>
</footer>

    </div>
  </template>
  <script setup>
 import useGetUser from "~/composables/getUser"
const {getUser} = useGetUser()
const {user} = await getUser()
</script>
  <style scoped>
    .router-link-exact-active {
      color: #9BC1BC;
    }
  </style>