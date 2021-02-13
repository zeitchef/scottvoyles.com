<template>
  <main class="max-w-6xl px-8 mx-auto mt-8 mb-16 md:mb-0">
    <p>This is an ever-changing list of technologies that I currently prefer to use. Check out what other developers are using at <a href="https://uses.tech">uses.tech</a></p>

    <section>
      <h2>Languages & Frameworks</h2>

      <p>I use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> to solve problems.  When scripting or writing CLI's, I'll usually go with my first love <a href="https://www.ruby-lang.org/en">Ruby</a>, but I'm doing more and more with <a href="https://nodejs.org">Node.js</a>. I put a lot of focus on  writing semantic <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> with an emphasis on accessibility. When writing <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>, I prefer using <a href="https://tailwindcss.com/">Tailwind CSS</a>.</p>

      <p>I like to use <a href="https://vuejs.org">Vue.js</a> superpowered by <a href="https://nuxtjs.org">Nuxt.js</a> for basically any type of frontend I'm building - whether single-page applications or static sites. For backend API's, I prefer to use <a href="https://rubyonrails.org">Ruby on Rails</a>. I use <a href="https://mjml.io">MJML</a> for crafting HTML emails easily.</p>
    </section>

    <section>
      <h2>Editor & Terminal</h2>

      <p><a href="https://neovim.io/">Neovim</a> is my editor, used almost exclusively inside <a href="https://github.com/tmux/tmux/wiki">tmux</a>. I manage workspaces using <a href="https://github.com/tmuxinator/tmuxinator">tmuxinator</a> and vim sessions and use <a href="https://www.zsh.org/">zsh</a> as my shell.</p>

      <p>I use <a href="https://iterm2.com/">iTerm</a> as my terminal emulator with the <a href="https://github.com/chawyehsu/base16-snazzy-scheme">base16-snazzy</a> colorscheme and <a href="https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/FiraCode">FiraCode Nerd Font</a>. I use <a href="https://github.com/chriskempson/base16-shell">base16-shell</a> to seamlessly manage colors for all my work in the terminal.</p>
    </section>

    <section>
      <h2>Apps</h2>

      <p>I like working with as small a subset of tools as possible, to really master them. That's why I use <a href="https://alfredapp.com">Alfred</a> as the central piece in almost all my macOS-related workflows. I use it for launching applications, snippet expansion, as a universal clipboard manager, for file-related actions, web and document searches, running system commands and numerous other personal workflows.</p>

      <p>I also use <a href="https://folivora.ai/">Better Touch Tool</a> for mapping hotkeys and trackpad gestures. For most of my automation needs, I use an open-source Hazel alternative call <a href="">organize</a> with a few simple rules to manage my folders.</p>

      <p>I use <a href="https://www.devontechnologies.com/apps/devonthink">DEVONthink Pro</a> for syncing bookmarks across browsers and document management, and I use <a href="https://culturedcode.com/things/">Things</a> as my primary todo-list application.</p>

      <p>I use <a href="https://www.figma.com/">Figma</a> for wireframing and prototyping projects.</p>
    </section>

    <section>
      <h2>Desk & Other Gear</h2>

      <p>My current workhorse is a 2020 <a href="https://www.apple.com/mac-mini/">Mac mini</a> 6-core i7 upgraded to 32GB RAM connected to a <a href="https://www.dell.com/en-us/shop/accessories/apd/210-AVJV">Dell Ultrasharp 2720Q</a> 4K monitor. I use an Apple Magic Trackpad 2 and a wireless <a href="https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard">Keychron K2</a> mechanical keyboard.</p>

      <p>My desktop audio setup is intentionally simple: I use a pair of <a href="https://www.audio-technica.com/en-us/ath-m40x">Audio-Technica ATH-MT40x</a> professional monitor headphones for their detailed clarity, usually paired with the <a href="https://ifi-audio.com/products/zen-dac/">iFi Zen</a> DAC and headphone amp.</p>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'An overview of the tools I prefer to use'
        }
      ]
    }
  }
}
</script>

<style scoped>
section {
  @apply mt-8
}

h2 {
  @apply font-medium
}

p {
  @apply mt-4
}
</style>
