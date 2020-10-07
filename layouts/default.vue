<template>
  <div id="bg-gradient" class="flex flex-col min-h-screen bg-white text-snazzy-gray-800 dark:bg-snazzy-gray-800 dark:text-snazzy-white">
    <AppHeader @update="toggleGradient($event)" />
    <Nuxt class="content" />
    <AppFooter class="flex-shrink-1"/>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toggleGradient(value) {
      let el = document.getElementById('bg-gradient')
      if (value == 'dark') {
        el.classList.remove('light-gradient')
        el.classList.add('dark-gradient')
      } else {
        el.classList.remove('dark-gradient')
        el.classList.add('light-gradient')
      }
    }
  },
  mounted() {
    const mode = Array.from(document.getElementById('html').classList)[0]
    let el = document.getElementById('bg-gradient')
    el.classList.add(`${mode}-gradient`)
  }
}
</script>

<style>
.content {flex: 1 0 auto; }
</style>
