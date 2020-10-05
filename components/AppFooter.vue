<template>
  <div id="footer" class="flex items-center justify-between w-screen h-12 p-8">
    <p>{{ pageTitle }}</p>
    <div id="social">
      <a href="">github</a>
      <a href="">twitter</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    pageTitle() {
      const path = this.$nuxt.$route.path.substring(1)
      return path ? path : 'zeitchef@gmail.com'
    }
  }
}
</script>

<style scoped>
a {
  color: var(--black);
  text-decoration: none;
}
</style>
