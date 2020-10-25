<template>
  <div class="w-full max-w-6xl px-8 mx-auto mt-8 mb-16 md:mb-0">
    <h1 class="mb-4 text-3xl">WTF</h1>
    <p>My cheatsheets collection</p>
    <section class="mt-8">
      <p v-for="cheatsheet in cheatsheets" :key="cheatsheet.slug">
        <n-link :to="{ name: 'wtf-slug', params: { slug: cheatsheet.slug } }">
          {{ cheatsheet.title }}
        </n-link>
      </p>
    </section>
  </div>
</template>

<script>
  export default{
    async asyncData({ $content, params }) {
      const cheatsheets = await $content('cheatsheets', params.slug)
        .only(['title', 'slug'])
        .sortBy('title', 'asc')
        .fetch()

      return { cheatsheets }
    }
  }
</script>

<style scoped>
h4 a {
  @apply no-underline
}
</style>
