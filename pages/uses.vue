<template>
  <main>
    <h1>/uses</h1>
    <p>This is an ever-changing list of technologies that I currently prefer to use.</p>

    <h2>Languages</h2>
    <p>These days, I reach for <a href="">JavaScript</a> to solve problems. When scripting or writing CLI's, I'll usually go with my first love <a href="">Ruby</a>, but I'm doing more and more with <a href="">Node.js</a>.
    </p>
    <p>I give a lot of energy to writing semantic <a href="">HTML</a> that puts
      an emphasis on accessibility. When writing <a href="">CSS</a>, I prefer using <a href="">Tailwind CSS</a>.
    </p>
    <h2>Frameworks</h2>
    <p>
      I like to use <a href="https://vuejs.org">Vue.js</a> that's superpowered
      by <a href="">Nuxt.js</a> for essentially any type of frontend I'm building.
      For writing backend API's, I like to use <a href="">Ruby on Rails</a> with
      or without <a href="">GraphQL</a>. I use <a href="">MJML</a> for crafting HTML emails easily.
    </p>
    <h2>Editor & Shell</h2>
    <p>I use <a href="">Neovim</a> in a <a href="">tmux</a> session inside
      <a href="">zsh</a>.
    </p>

    <section>
      <p>Other things I can use, but don't usually go to first:</p>
      <ul>
        <li>Bootstrap</li>
      </ul>
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
a { border-bottom: 1px solid #34353e; }
</style>
