<template>
    <div class="container justify-center text-center m-10">
        <h1 class="text-5xl">Success!</h1>
        <div class="my-10 flex items-center justify-center">
      <img class="mx-5 h-10 w-auto" src="../../public/favicon.ico" alt="Your Company" />
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thank you for choosing U Shop</h2>
    </div>
        <div class="my-20">
            <p>Your order is now being completed. Please expect delivery in approximately 5 business days.</p>
        </div>
        <div class="bg-white my-20">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" v-if="products.length">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900" >You purchased:</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="product.image" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex flex-col justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <p>
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </p>
              </h3>
              <p class="mt-1 text-sm text-gray-500"># of items: {{ product.count }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">Price for each: ${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">You shouldn't be seeing this... how did you just make a purchase???</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

    </div>
  </div>
  </div>
    </div>
</template>

<script setup>
import useItemsStore from '~/stores/itemsStore.js';
  const itemsStore = useItemsStore()
const products = itemsStore.all
itemsStore.reset()
</script>

<style scoped>

</style>