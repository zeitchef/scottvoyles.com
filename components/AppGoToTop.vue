<template>
  <span>
    <a id="scroll-top" class="float-right text-sm" @click="scrollToTop">
      Go to top
    </a>
  </span>
</template>

<script>
export default {
  props: {
    path: String,
  },
  methods: {
    scrollToTop() {
      const html = document.querySelector('html')
      const hash = window.location.hash

      if (hash) {
        this.$router.back()
        html.scrollIntoView()
      } else {
        html.scrollIntoView()
      }
    },
  },
  computed: {
    pathname() {
      return this.path.replace('cheatsheets', 'wtf')
    },
  },
}
</script>

<style scoped>
#scroll-top {
  @apply cursor-pointer;
}
</style>
