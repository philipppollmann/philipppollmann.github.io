export default defineNuxtConfig({
    app: {
        baseURL: '/',
        buildAssetsDir: 'assets',
        head: {
            link: [
                { rel: 'icon', type: 'image/png', href: '/P-Logo.png' }
            ]
        }
    },
    nitro: {
        output: {
            publicDir: '.output/public'
        }
    },
    devtools: { enabled: true },
    components: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@invictus.codes/nuxt-vuetify'
    ],
    vite: {
        server: {
            hmr: {
                protocol: 'ws',
                host: 'localhost'
            }
        }
    },
    vuetify: {
        vuetifyOptions: {},
        moduleOptions: {
            treeshaking: false,
            useIconCDN: false,
            styles: true,
            autoImport: true,
            useVuetifyLabs: false,
        }
    }
})