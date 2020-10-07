<template>
  <div class="flex flex-col min-h-screen bg-white text-snazzy-gray-800 dark:bg-snazzy-gray-800 dark:text-snazzy-white gradient-light dark:gradient-dark">
    <AppHeader />
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
