<template>
  <article class="w-full max-w-6xl px-8 mx-auto mt-8 mb-16 md:mb-0">
    <h1>{{ cheatsheet.title }}</h1>
    <p class="text-sm text-snazzy-gray-500 dark:text-snazzy-gray-300">Last updated: {{ formatDate(cheatsheet.updatedAt) }}</p>

    <nuxt-content :document="cheatsheet" class="my-8" />
  </article>
</template>

<script>
  export default{
    async asyncData({ $content, params }) {
      const cheatsheet = await $content('cheatsheets', params.slug).fetch()

      return { cheatsheet }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>

<style scoped>
</style>
