<template>
  <div id="bg-gradient" class="flex flex-col min-h-screen bg-white text-snazzy-gray-800 dark:bg-snazzy-gray-800 dark:text-snazzy-white">
    <AppHeader>
      <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="outline-none bi bi-circle-half" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 15V1a7 7 0 1 1 0 14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      </svg>
    </AppHeader>
    <Nuxt class="content" />
    <AppFooter class="flex-shrink-1"/>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>
.content {flex: 1 0 auto; }
</style>
