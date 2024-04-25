
import useUserStore from '~/stores/userStore'
import { createUserWithEmailAndPassword  } from 'firebase/auth'
const error = ref(null)
const isPending = ref(false)

const signup = async (email, password) => {
    const userStore = useUserStore()
    const {$auth} = useNuxtApp()
  error.value = null
  isPending.value = true

  try {
    const res = await createUserWithEmailAndPassword($auth, email, password)
    if (!res) {
      throw new Error('Could not complete signup')
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

const useSignup = () => {
  return { error, isPending, signup }
}

export default useSignup