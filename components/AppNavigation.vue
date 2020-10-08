<template>
  <div class="flex items-center justify-center">
    <div class="menu-icon">
      <span class="bg-snazzy-gray-800 menu-icon__line menu-icon__line-left dark:bg-snazzy-white"></span>
      <span class="menu-icon__line bg-snazzy-gray-800 dark:bg-snazzy-white"></span>
      <span class="menu-icon__line menu-icon__line-right bg-snazzy-gray-800 dark:bg-snazzy-white"></span>
    </div>

    <nav class="nav">
      <div class="nav__content">
        <ul>
          <!-- <li class="nav__list-item">home</li> -->
          <!-- <li class="nav__list-item">about</li> -->
          <!-- <li class="nav__list-item">tools</li> -->
          <!-- <li class="nav__list-item">contact</li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    addListeners() {
      const body = document.querySelector('body')
      const menu = document.querySelector('.menu-icon')
      menu.addEventListener('click', () => this.toggleClass(body, 'nav-active'))
    },
    toggleClass(el, stringClass) {
      el.classList.toggle(stringClass)
    }
  },
  mounted() {
    this.addListeners()
  }
}
</script>

<style scoped>
/* default state */
.menu-icon {
  --size: 30px;

  height: var(--size);
  width: var(--size);
  position: fixed;
  z-index: 2;
  cursor: pointer;
}

.menu-icon__line {
  height: 2px;
  width: var(--size);
  display: block;
  margin-bottom: 4px;
  transition: transform 200ms ease, background-color 500ms ease;
}

.menu-icon__line-left {
  width: calc(var(--size) / 2);
}

.menu-icon__line-right {
  width: calc(var(--size) / 2);
  float: right;
}

.nav {
  --width: 100vw;
  --height: 100vh;
  --transition-easing: cubic-bezier(.77,0,.175,1);
  --transition-length: 800ms;

  position: fixed;
  z-index: 1;
}

.nav::before,
.nav::after {
  content: '';
  width: var(--width);
  height: var(--height);
  background-color: red;
  z-index: -1;
  transition: transform var(--transition-easing) var(--transition-length);
  transform: translateX(0%) translateY(-100%);
}

.nav::after {
  background-color: green;
  transition-delay: 0s;
}

.nav::before {
  transition-delay: 100ms;
}

/* active state */
body.nav-active .menu-icon__line {
  transform: translateX(0px) rotate(-45deg);
}

body.nav-active .menu-icon__line-left {
  transform: translateX(1px) rotate(45deg);
}

body.nav-active .menu-icon__line-right {
  transform: translateX(-2px) rotate(45deg);
}
</style>
