<template>
  <article class="w-full max-w-6xl px-8 mx-auto mt-8 mb-16 md:mb-0">
    <h1 name="top">{{ cheatsheet.title }}</h1>
    <p v-if="cheatsheet.description">{{ cheatsheet.description }}</p>
    <p class="text-sm text-snazzy-gray-500 dark:text-snazzy-gray-300">
      Last updated: {{ formatDate(cheatsheet.updatedAt) }}
    </p>

    <nav class="mt-8">
      <ul>
        <li v-for="link in cheatsheet.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>

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
