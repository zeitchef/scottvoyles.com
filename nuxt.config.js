export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Scott Voyles',
    htmlAttrs: {
      lang: 'en-US',
      id: 'html',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The website of Scott Voyles, developer and musician',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/globals', '@/assets/css/reset', '@/assets/css/base'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/robots',
    '@nuxtjs/gtm',
    '@nuxtjs/sentry',
  ],

  sentry: {
    dsn: 'https://f49d71da3d864371bd57ca4a6003813b@o1053080.ingest.sentry.io/6046335',
  },

  googleFonts: {
    families: {
      'IBM+Plex+Mono': {
        wght: [400, 500],
      },
    },
    display: 'swap',
    download: true,
  },

  gtm: {
    id: 'GTM-W5FBR23',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    fullTextSearchFields: ['title', 'description', 'text'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css',
      },
    },
  },

  robots: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  server: {
    port: 8000,
    host: '0.0.0.0',
    timing: false,
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
}
