import { defineStore } from "pinia"

const useUserStore = defineStore('itemsStore', {
    state : () => ({
        user: null
    }),
    getters: {
        currentUser(){
            return this.user
        }
    },
    actions: {
        loginUser(user){
            this.user = user
        },
        logoutUser(){
            this.user = null
        }
    }
} )


export default useUserStore