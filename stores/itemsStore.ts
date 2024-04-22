import { defineStore } from "pinia"

const useItemsStore = defineStore('itemsStore', {
    state : () => ({
        items: [

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
            const check = this.items.find(t => t.id === item.id)
            if(check){ //logic to check if this is already in the cart
                check.count+=1
                console.log('here1')
            } else {
                this.items.push(item)
                console.log('here2')
            }
        },
        delete(idToDelete){
            //enter some logic here to remove or drop count to zero

            //this is probably how i should filter through
                //      const task = this.tasks.find(t => t.id === id)
                //task.isFav = !task.isFav
            this.items.filter(t=>{
                return t.id !== idToDelete
            })
            console.log('removed', idToDelete)
        }
    }
} )


export default useItemsStore