const path = require('path');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // router: {
  //   middleware: ['auth']
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'black', continuous: true, duration: 10000 },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css', 
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuelidate'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 'vuelidate'
    // '@nuxtjs/axios'
  ],
  /*
  ** Build configuration
  */
  build: {
    // extractCSS: true, // if you use purgeCSS
    // postcss: {
    //   plugins: {
    //     tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
    //     cssnano: {
    //       preset: 'default',
    //       discardComments: { removeAll: true },
    //       zIndex: false
    //     }
    //   },
    //   // Change the postcss-preset-env settings
    //   preset: {
    //     stage: 0, // enable all (experimental) polyfills
    //     autoprefixer: {
    //       cascade: false,
    //       grid: true
    //     }
    //   }
    // },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
