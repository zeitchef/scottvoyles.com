<template>
  <span>
    <a class="float-right text-sm" @click="scrollToTop">Go to top</a>
  </span>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      const html = document.querySelector('html')
      html.scrollIntoView()
    },
  },
}
</script>

<style scoped>
</style>
