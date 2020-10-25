<template>
  <div class="w-full max-w-6xl px-8 mx-auto mt-8 mb-16 md:mb-0">
    <h1 class="mb-4 text-3xl">WTF</h1>
    <p class="mb-8">My cheatsheets collection</p>
    <main>
      <section class="flex flex-wrap justify-between mt-8">
        <article v-for="cheatsheet in cheatsheets"
                 :key="cheatsheet.slug"
                 class="p-2 mr-4 text-white rounded bg-snazzy-gray-500">
          <n-link :to="{ name: 'wtf-slug', params: { slug: cheatsheet.slug } }">
            {{ cheatsheet.title }}
          </n-link>
        </article>
      </section>
    </main>
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
main > :not(:last-child) {
  @apply mb-8
}

section {
  margin-top: -1rem;
}

section > * {
  margin-top: 1rem;
}
</style>
