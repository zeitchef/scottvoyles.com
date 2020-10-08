<template>
  <div class="flex items-center justify-between w-screen h-12 p-8">
    <!-- HamburgerMenu -->
    <AppNavigation class="flex items-center justify-center" />

    <!-- Color Mode Switcher -->
    <div id="mode-toggle" @click="toggleColorMode" class="pt-2 pb-4 pl-8 cursor-pointer">
      <svg width="1.25rem" height="1.25rem" viewBox="0 0 16 16" class="outline-none bi bi-circle-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toggleColorMode() {
      if (this.$colorMode.value == 'dark') {
        this.$colorMode.preference = 'light'
      } else {
        this.$colorMode.preference = 'dark'
      }
    }
  }
}
</script>

<style scoped>
</style>
