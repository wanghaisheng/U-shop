<template>
    <div>
        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="../../public/favicon.ico" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleSubmit" class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" v-model="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-center" />
          </div>
        </div>

        <div>
          <button v-if="!isPending" type="submit" class="flex w-full justify-center rounded-md btn px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Sign in</button>
          <button v-else disabled type="submit" class="flex w-full justify-center rounded-md btn px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Working...</button>
            <div v-if='error' class="error">{{ error }}</div>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Don't have an account?
        <Nuxt-Link to="/auth/signup" class="font-semibold leading-6 btn">Sign up</Nuxt-Link>
      </p>
    </div>
  </div>
    </div>
</template>

<script setup>
import useUserStore from '~/stores/userStore';
const userStore = useUserStore()
const email = ref('')
const password = ref('')
const {error, login, isPending} = useLogin()
definePageMeta({
    layout: "auth",
  })
  const handleSubmit = async () => {
 await login(email.value, password.value)
   if(!error.value){
    console.log(userStore.currentUser)
    await navigateTo('/')
   }
   if(error.value==='Firebase: Error (auth/invalid-credential).'){
    error.value='Incorrect Credentials'
   }
  }
</script>

<style scoped>

</style>