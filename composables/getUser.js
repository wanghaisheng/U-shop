
import { onAuthStateChanged } from 'firebase/auth'

// refs
const getUser = () => {
    const {$auth} = useNuxtApp()
const user = ref($auth.currentUser)

onAuthStateChanged($auth, _user => {
  console.log('User state change. Current user is:', _user)
  user.value = _user
})
console.log(user)
return {user}
}

const useGetUser = () => {
return  {getUser}  
}

export default useGetUser