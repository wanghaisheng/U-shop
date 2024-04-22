<template>
    <div>
    <Head>
      <Title>U Shop | Checkout </Title>
    </Head>
    <form>
        <h1>Checkout</h1>
        <p>{{ mode }}</p>
    </form>
    </div>
</template>

<script setup>
const mode = ref('hi')

definePageMeta({
    layout: "products",
  })
</script>

<style scoped>


</style>