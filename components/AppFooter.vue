<template>
  <div id="footer" class="flex items-center justify-center w-screen h-12 p-8 md:justify-between">
    <p v-if="pageTitle === 'zeitchef@gmail.com'">
      <a class="footer-link" href="mailto:zeitchef@gmail.com">{{ pageTitle }}</a>
    </p>
    <p v-else>
      {{ pageTitle }}
    </p>
    <div v-if="$route.path == '/about'">02</div>
    <div v-if="$route.path == '/tools'">03</div>
    <div id="social" v-if="$route.path == '/' || $route.path == '/contact'">
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
      const path = this.$route.path
      const lastChar = path.substring((path.length - 1))

      if (lastChar === '/' && path.length > 1) {
        return path.substring(0, path.length - 1) // remove trailing '/'
      } else if (path === '/') {
        return 'zeitchef@gmail.com'
      } else {
        return path
      }
    }
  }
}
</script>

<style scoped>
#social .footer-link { @apply ml-4 }

@media (max-width: 768px) {
  #social {
    display: none;
  }
}
</style>
