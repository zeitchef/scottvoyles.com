<template>
  <div class="w-full max-w-6xl px-8 mx-auto mt-8 mb-16 md:mb-0">
    <h1 class="mb-8 text-4xl">What the F#@k?</h1>
    <AppSearchInput
      @filter-cheatsheets="filterCheatsheets($event)"
      @clear-results="resetFilteredCheatsheets" />
    <main>
      <section v-if="filteredCheatsheets.length" class="flex flex-wrap mt-8">
        <article v-for="cheatsheet in filteredCheatsheets"
                 :key="cheatsheet.slug"
                 class="p-2 mr-4 text-white rounded bg-snazzy-gray-500">
          <n-link :to="{ name: 'wtf-slug', params: { slug: cheatsheet.slug } }">
            {{ cheatsheet.title }}
          </n-link>
        </article>
      </section>
      <section v-else class="flex flex-wrap justify-between mt-8">
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
  import AppSearchInput from '@/components/AppSearchInput'

  export default{
    data () {
      return {
        filteredCheatsheets: []
      }
    },
    methods: {
      filterCheatsheets (sheets) {
        this.filteredCheatsheets = sheets
      },
      resetFilteredCheatsheets () {
        this.filteredCheatsheets = []
      }
    },
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
