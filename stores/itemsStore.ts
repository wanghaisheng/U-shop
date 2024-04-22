import { defineStore } from "pinia"

const useItemsStore = defineStore('itemsStore', {
    state : () => ({
        items: [
            {id: 100, title: "pants", price: 20, count:1},
            {id: 101, title: "shirt", price: 30, count: 2}
        ],
        user: 'Name'
    }),
    getters: {
        all():any{
            return this.items
        },
        itemsLength(): number {
            return this.items.length
        }
    },
    actions: {
        addItem(item){
            if(false){ //logic to check if this is already in the cart
                //logic to add one to the count
            } else {
            this.items.push(item)
            }
        }
    }
} )


export default useItemsStore