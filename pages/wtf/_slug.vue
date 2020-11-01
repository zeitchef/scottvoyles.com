<template>
  <article class="w-full max-w-6xl px-8 mx-auto mt-8 mb-16 md:mb-0">
    <h1 name="top">{{ cheatsheet.title }}</h1>
    <p class="text-sm">
      updated:
      <span class="text-snazzy-gray-500 dark:text-snazzy-gray-300">
        {{ formatDate(cheatsheet.updatedAt) }}
      </span>
    </p>

    <!-- Table of Contents -->
    <details class="mt-8">
      <summary class="outline-none">Contents</summary>
      <nav>
        <ul>
          <li v-for="link in cheatsheet.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </details>

    <!-- Content -->
    <nuxt-content :document="cheatsheet" class="my-8" />

    <AppGoToTop :path="cheatsheet.path" />
  </article>
</template>

<script>
import AppGoToTop from '@/components/AppGoToTop.vue'

export default {
  async asyncData({ $content, params }) {
    const cheatsheet = await $content('cheatsheets', params.slug).fetch()

    return { cheatsheet }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
