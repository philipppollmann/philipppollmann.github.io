const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                primary: '#202225',
                secondary: '#5865f2',
                customPurple: '#8e52fc',
                customGreen: '#00d886',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}