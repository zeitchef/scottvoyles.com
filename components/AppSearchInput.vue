<template>
  <div class="mb-8 border-b border-snazzy-gray-300">
    <input
      type="search"
      autocomplete="off"
      placeholder="Search cheatsheets..."
      class="w-full placeholder-snazzy-gray-300"
      v-model="query"
    />

    <!-- Filter cheatsheet tags -->
    <ul v-if="cheatsheets.length">
      <li v-for="cheatsheet in cheatsheets" :key="cheatsheet.slug">
        <NuxtLink :to="{ name: 'cheatsheet-slug', params: { slug: cheatsheet.slug } }">
          {{ cheatsheet.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        query: '',
        cheatsheets: []
      }
    },
    watch: {
      async searchQuery(query) {
        if (!query) {
          this.cheatsheets = []
          return
        }
        this.cheatsheets = await this.$content('cheatsheets')
          .search('title', query)
          .fetch()
      }
    }
  }
</script>

<style scoped>
/* Remove 'x' from search input */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }
</style>
