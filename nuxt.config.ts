// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    app: {
        baseURL: '/',
        buildAssetsDir: 'assets'
    },
    devtools: { enabled: true },
    components: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode'
    ]
})
