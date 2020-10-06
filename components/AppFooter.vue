<template>
  <div id="footer" class="flex items-center justify-center w-screen h-12 p-8 md:justify-between">
    <p v-if="pageTitle === 'zeitchef@gmail.com'">
      <a class="footer-link" href="mailto:zeitchef@gmail.com">{{ pageTitle }}</a>
    </p>
    <p v-else>
      {{ pageTitle }}
    </p>
    <div id="social">
      <a href="https://github.com/zeitchef" class="footer-link">github</a>
      <a href="https://twitter.com/zeitchef" class="footer-link">twitter</a>
      <a href="https://linkedin.com/in/zeitchef" class="footer-link">linkedin</a>
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
#social .footer-link { @apply pl-4 }

@media (max-width: 768px) {
  #social {
    display: none;
  }
}
</style>
