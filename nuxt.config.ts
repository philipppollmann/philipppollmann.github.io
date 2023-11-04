// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/',
        buildAssetsDir: 'assets'
    },
    devtools: { enabled: true },
      components: true,
      css:  ['@/assets/css/tailwind.css'],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ]
})
