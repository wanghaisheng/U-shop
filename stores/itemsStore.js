import { defineStore } from "pinia"
const useItemsStore = defineStore('itemsStore', {
    state : () => ({
        items: [
            
        ],
        total:0
    }),
    getters: {
        all(){
            return this.items
        },
        itemsLength() {
            return this.items.length
        },
        itemsPrice(){
            let num=0
            this.items.forEach(item=>{
                num += item.count*item.price
            })
            this.total = num
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
            this.itemsPrice
        },
        delete(idToDelete){
            //enter some logic here to remove or drop count to zero

            //this is probably how i should filter through
                //      const task = this.tasks.find(t => t.id === id)
                //task.isFav = !task.isFav
           this.items = this.items.filter(t=>{
                if( t.id !== idToDelete){
                    return true
                } else {
                    if( t.count>1 ){
                        t.count-=1
                        return true
                    } else {
                        return false
                    }
                }
            })
            console.log('removed', idToDelete)
            this.itemsPrice
        },
        reset(){
         this.items = []
         this.itemsPrice
        }
    }
} )


export default useItemsStore