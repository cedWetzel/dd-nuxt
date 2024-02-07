<template>
  <div>
    Nuxt module playground!
    <button class="" @click="createError">Throw an error which is not caught by the module.</button>
  </div>
</template>

<script setup>
const createError = () =>{ throw new Error('This is an error') }
createError();
</script>
