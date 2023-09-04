module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    plugins: [
        'nuxt',
    ],
    extends: [
        'eslint:recommended',
        'plugin:nuxt/recommended',
    ]
};
