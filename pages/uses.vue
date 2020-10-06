<template>
  <main class="max-w-6xl px-8 mx-auto mt-8">
    <p>This is an ever-changing list of technologies that I currently prefer to use. Check out what other developers are using at <a href="https://uses.tech">uses.tech</a></p>

    <section>
      <h2>Languages & Frameworks</h2>
      <p>I reach for <a href="">JavaScript</a> first to solve problems.  When scripting or writing CLI's, I'll usually go with my first love <a href="">Ruby</a>, but I'm doing more and more with <a href="">Node.js</a>. I put a lot of focus on  writing semantic <a
      href="">HTML</a> putting an emphasis on accessibility. When writing <a href="">CSS</a>, I prefer using <a href="">Tailwind CSS</a>.</p>

      <p>I like to use <a href="https://vuejs.org">Vue.js</a> superpowered by <a href="">Nuxt.js</a> for basically any type of frontend I'm building - whether single-page applications or static sites. For backend API's, I prefer to use <a href="">Ruby on Rails</a>. I use <a href="">MJML</a> for crafting HTML emails easily.</p>
    </section>
    <section>
      <h2>Editor & Terminal</h2>
      <p>I use <a href="">Neovim</a> inside of <a href="">tmux</a>. I manage my workspaces using <a href="">Tmuxinator</a> and Vim sessions and use <a href="">zsh</a> as my shell.</p>

      <p>I use <a href="">iTerm</a> as my terminal emulator with the <a href="">base16-snazzy</a> colorscheme and <a href="">Knack Nerd Font</a>.</p>
    </section>
    <section>
      <h2>Apps</h2>
      - Alfred
      - Better Touch Tool
      - DEVONthink Pro
      - Things
      - Figma
    </section>
    <section>
      <h2>Desk & Other Gear</h2>
      - desk and legs
      - Mac mini 2020 32G RAM Spacegray
      - Apple Magic Trackpad 2 Spacegray
      - Keychron K2 Mechanical Keyboard
      - <a href="https://www.audio-technica.com/en-us/ath-m40x">audio-technica ATH-MT40x</a> Professional Monitor Headphones
      - <a href="https://fiio.com/q1mkii">FiiO Q1 Mark II USB DAC</a>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { hid: 'description',
          name: 'description',
          content: 'An overview of the tools I prefer to use'
        }
      ]
    }
  }
}
</script>

<style scoped>
section { @apply mt-8 }
p { @apply mt-4 }
</style>
