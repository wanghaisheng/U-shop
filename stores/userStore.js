import { defineStore } from "pinia"

const useItemsStore = defineStore('itemsStore', {
    state : () => ({
        user: null
    }),
    getters: {
        user(){
            return this.user
        }
    },
    actions: {
        login(user){
            //login logic
        },
        logout(){
            //logout logic
        }
    }
} )


export default useItemsStore