<template>
    <div>
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-7"> 
                <img :src="product.image" alt="product image" class="mx-auto my-7">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex" @click="addToCart">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>{{ btnText }}</span>
        </button>
            </div>
        </div>
    </div>
</template>

<script setup>
  import useItemsStore from '~/stores/itemsStore.js';
const itemsStore = useItemsStore()
const { product } = defineProps(["product"])
const btnText = ref('Add to Cart')
const addToCart = () => {
btnText.value = "Adding..."
itemsStore.addItem({
    id:product.id,
    price:product.price,
    count:1,
    title:product.title,
    image:product.image
})
setTimeout(()=>{ btnText.value = "Added!"
},1000)
setTimeout(()=>{ btnText.value = "Add another"
},2000)
}
</script>

<style scoped>
img{
    max-width: 400px;
}
</style>