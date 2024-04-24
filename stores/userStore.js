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
        loginUser(email){
            this.user = email
        },
        logoutUser(){
            this.user = null
        }
    }
} )


export default useUserStore