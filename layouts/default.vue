<template>
  <div class="flex flex-col h-screen">
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

html, body {
  background-color: var(--white);
  color: var(--black);
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

a {
  color: var(--pink);
  text-decoration: underline;
}

ul { @apply list-none }
li { @apply pl-4 }

.heading { font-size: 32px; }
</style>
