

import { signInWithEmailAndPassword  } from 'firebase/auth'
import useUserStore from '~/stores/userStore'
const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    const userStore = useUserStore()
    const {$auth} = useNuxtApp()
  error.value = null
  isPending.value = true

  try {
    const res = await signInWithEmailAndPassword($auth, email, password)
    if (!res) {
      throw new Error('Could not complete login')
    }
    // userStore.loginUser(email)
    error.value = null
    isPending.value = false
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useLogin = () => {
  return { error, isPending, login }
}

export default useLogin