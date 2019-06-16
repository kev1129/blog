const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const config = require('./.contentful.json')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css', integrity: 'sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E', crossorigin: 'anonymous'},
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  router: {
    // base: '/blog/',
    // routeNameSplitter: '/'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    {src: '~/plugins/vue-easy-lightbox', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    // '@nuxtjs/markdownit'
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  webfontloader: {
    google: {
      families: [
        'Abel',
        'Noto+Sans+JP'
      ]
    }
  },
  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  // markdownit: {
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     ['markdown-it-container', containerName],
  //     'markdown-it-attrs'
  //   ]
  // }
}
