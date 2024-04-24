<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="container mx-auto p-4 flex justify-center">
          <h1 class="font-bold"><Nuxt-Link to="/">U Shop</Nuxt-Link></h1>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </template>