import { defineStore } from "pinia"

const useItemsStore = defineStore('itemsStore', {
    state : () => ({
        items: [
            {id: 100, title: "pants", price: 20, count:1},
            {id: 101, title: "shirt", price: 30, count: 2}
        ],
        user: 'Name'
    })
} )


export default useItemsStore