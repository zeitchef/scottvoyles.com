<template>
  <div class="mb-8 border-b border-snazzy-gray-300">
    <input
      ref="searchbar"
      type="search"
      autocomplete="off"
      placeholder="Search cheatsheets..."
      class="w-full placeholder-snazzy-gray-300"
      v-model="searchQuery"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResults: [],
    }
  },
  mounted() {
    this.$refs.searchbar.focus()
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.searchResults = []
        this.$emit('clear-results')
      }

      this.searchResults = await this.$content('cheatsheets')
        .search(searchQuery)
        .sortBy('title', 'asc')
        .fetch()

      this.$emit('filter-cheatsheets', this.searchResults)
    },
  },
}
</script>

<style scoped>
/* Remove 'x' from search input */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  display: none;
}
</style>
