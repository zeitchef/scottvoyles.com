module.exports = {
  experimental: {
    darkModeVariant: true
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  dark: 'class',
  theme: {
    extend: {
      colors: {
        'snazzy-gray-900': '#282a36',
        'snazzy-gray-800': '#34353e',
        'snazzy-gray-700': '#43454f',
        'snazzy-gray-500': '#78787e',
        'snazzy-gray-300': '#a5a5a9',
        'snazzy-gray-100': '#e2e4e5',
        'snazzy-white': '#f1f1f0',
        'snazzy-red': '#ff5c57',
        'snazzy-orange': '#ff9f43',
        'snazzy-yellow': '#f3f99d',
        'snazzy-green': '#5af78e',
        'snazzy-blue': '#57c7ff',
        'snazzy-pink': '#ff6ac1',
      },
    },
  },
  variants: {
    backgroundColor: [ 'hover', 'focus', 'active', 'dark' ],
    borderColor: [ 'dark' ],
    opacity: [ 'hover', 'focus', 'active' ],
    text: [ 'hover', 'focus', 'active', 'dark' ],
  }
};
