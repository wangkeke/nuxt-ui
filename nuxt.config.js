export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
        'bulma',
        // 项目里要用的 CSS 文件
        '@/assets/css/main.css',
        'video.js/dist/video-js.css',
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        '@/plugins/element-ui',
        { src: '~plugins/videoplayer', ssr: false },
        { src: '~plugins/icon', ssr: false },
        { src: '@/plugins/vue-dplayer', ssr: false },
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],

    loading: {
      color: '#00d1b2',
      height: '3px',
    },
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/axios'],

    axios: {
        proxy: true, // Can be also an object with default options
    },
    proxy: {
      '/api/': { target: 'http://localhost:8081', pathRewrite: {'^/api/': ''} }
    },
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      },
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        transpile: [/^element-ui/],
    },
}
