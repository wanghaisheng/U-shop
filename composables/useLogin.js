// import { projectAuth } from '../plugins/config'
// import useUserStore from '../stores/userStore'
// const userStore = useUserStore()
// const error = ref(null)
// const isPending = ref(false)
// const login = async (email, password) => {
//   error.value = null
// isPending.value = true
//   try {
//     const res = await projectAuth.signInWithEmailAndPassword(email, password)
//     userStore.loginUser(email)
//     error.value = null
//     isPending.value = false
//     return res
//   }
//   catch(err) {
//     console.log(err.message)
//     error.value = 'Incorrect login credentials'
//     isPending.value = false
//   }
// }

// const useLogin = () => {
//   return { error, login, isPending }
// }

// export default useLogin