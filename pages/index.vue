<template>
  <div class="flex flex-col justify-center">
    <h1 class="text-4xl">My name is Scott Voyles.</h1>
    <h2 class="text-4xl">I'm a frontend software developer and musician.</h2>
    <button class="w-32 p-2 mt-8 border border-black">{{ buttonTxt }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonTxt: 'CONTACT ME'
    }
  }
}
</script>

<style scoped>
</style>
