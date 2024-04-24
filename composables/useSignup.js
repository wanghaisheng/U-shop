// import { projectAuth } from '../plugins/config'
// import useUserStore from '../stores/userStore'
// const userStore = useUserStore()
// const error = ref(null)
// const isPending = ref(false)
// const signup = async (email, password) => {
//   error.value = null
//     isPending.value = true
//   try {
//     const res = await projectAuth.createUserWithEmailAndPassword(email, password)
//     if (!res) {
//       throw new Error('Could not complete signup')
//     }
//     userStore.loginUser(email)
//     error.value = null
//     isPending.value = false
//   }
//   catch(err) {
//     console.log(err.message)
//     error.value = err.message
//     if(err.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
//       error.value = "Please choose a stronger passsword"
//     }
//     isPending.value = false
//   }
// }

// const useSignup = () => {
//   return { error, signup, isPending} 
// }

// export default useSignup