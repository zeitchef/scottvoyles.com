<template>
  <div id="footer" class="flex items-center justify-center w-screen h-12 p-8 md:justify-between">
    <p v-if="$route.path == '/'" class="not-social">
      <a class="nav-link" href="mailto:zeitchef@gmail.com">{{ pageTitle }}</a>
    </p>
    <p v-else-if="$route.path == '/contact'" class="not-social">{{ pageTitle }}</p>
    <p v-else>{{ pageTitle }}</p>

    <div id="social" v-if="$route.path == '/' || $route.path == '/contact'">
      <a href="https://github.com/zeitchef" class="nav-link">github</a>
      <a href="https://twitter.com/zeitchef" class="nav-link">twitter</a>
      <a href="https://linkedin.com/in/zeitchef" class="nav-link">linkedin</a>
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
      const lastChar = path.charAt(path.length - 1)

      try {
        if (lastChar == '/' && path.length > 1) {
          return path.substring(0, path.length - 1)
        } else if (lastChar == '/' && path.length == 1) {
          return 'zeitchef@gmail.com'
        } else {
          return path
        }
      } catch (error) {
        console.error(error)
        this.$sentry.captureException(error)
      }
    }
  }
}
</script>

<style scoped>
#social .nav-link { @apply ml-2 }

@media (max-width: 768px) {
  .not-social {
    display: none;
  }
}
</style>
