<template>
  <main class="flex flex-col justify-center px-8">
    <section class="lg:pl-24">
      <p class="mb-3 text-2xl text-snazzy-gray-500 dark:text-snazzy-gray-300">
        {{ hello }}
      </p>
      <p class="text-2xl font-medium md:text-3xl">My name is Scott Voyles.</p>
      <p class="text-2xl md:text-3xl">
        I'm a frontend software developer and musician.
      </p>
      <button class="transiton-colors duration-500 ease-in-out hover:bg-snazzy-gray-900 hover:text-snazzy-gray-100 dark:border-snazzy-white dark:hover:bg-snazzy-white dark:hover:text-snazzy-gray-800" >
        <nuxt-link to="/contact" class="border-none">Contact me</nuxt-link>
      </button>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      hello: `<Hello />`,
    }
  },
}
</script>
