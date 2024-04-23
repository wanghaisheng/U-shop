
import { projectAuth } from '../firebase/config'
import useUserStore from '../stores/userStore'
const userStore = useUserStore()
const error = ref(null)
const isPending = ref(null)
const logout = async () => {
  error.value = null
    isPending.value = true
  try {
    await projectAuth.signOut()
    userStore.logoutUser()
    isPending.value = false
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isPending.value = false
  }
}

const useLogout = () => {
  return { error, logout, isPending}
}

export default useLogout