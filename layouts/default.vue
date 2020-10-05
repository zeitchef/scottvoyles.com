<template>
  <div class="flex flex-col h-screen bg-snazzy-white text-snazzy-gray-800">
    <AppHeader />
    <Nuxt class="h-screen p-8" />
    <AppFooter />
  </div>
</template>

<style>
html {
  font-family: var(--font-stack);
  font-size: var(--font-size);
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 { @apply text-4xl }
h2 { @apply text-3xl }
h3 { @apply text-2xl }

a:not(.footer-link) {
  @apply font-bold text-snazzy-gray-700 border-b-2 border-blue-500;
}

a:not(.footer-link):visited {
  @apply text-snazzy-gray-500;
}

ul { @apply list-none }
li { @apply pl-4 }

.heading { font-size: 32px; }
</style>
