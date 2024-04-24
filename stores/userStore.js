import { defineStore } from "pinia"
import useGetUser from "~/composables/getUser"

const useUserStore = defineStore('userStore', {
    
    state : () => ({
        user:   this.authChange
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
        },
        authChange(){
            const {getUser} = useGetUser()
            const {user} = getUser()
            console.log(user)
            return user
        }
    }
} )


export default useUserStore