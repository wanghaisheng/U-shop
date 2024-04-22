<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink to="/products" class="font-bold">U Shop</NuxtLink>
          <div class="flex">
          <NavCart />
          <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{{ itemsStore.itemsLength }} Items</span>
        </div>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
      <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Merch</NuxtLink></li>
        </ul>
      </footer>
    </div>
  </template>
  <script setup>
  import useItemsStore from '~/stores/itemsStore';
  
  const itemsStore = useItemsStore()
  </script>
  <style scoped>
    .router-link-exact-active {
      color: #9BC1BC;
    }
  </style>