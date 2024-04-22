<template>
    <div>
    <Head>
      <Title>U Shop | Checkout </Title>
    </Head>
    <form>
        <h1>Checkout</h1>
        <div v-for="item in itemsStore.items">
            <p>{{ item.title }}</p>
        </div>
    </form>
    </div>
</template>

<script setup>
import useItemsStore from '~/stores/itemsStore';

const itemsStore = useItemsStore()
const mode = ref('hi')
definePageMeta({
    layout: "products",
  })
</script>

<style scoped>


</style>