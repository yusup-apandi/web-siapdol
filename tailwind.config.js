/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                "inter": ['inter']
            },
            colors: {
                "cream": "#FFEEB5",
                "primary-50": "#e6f6ef",
                "primary-100": "#b0e3cc",
                "primary-200": "#8ad6b3",
                "primary-300": "#54c390",
                "primary-400": "#33b87b",
                "primary-500": "#00a65a",
                "primary-600": "#009752",
                "primary-700": "#007640",
                "primary-800": "#005b32",
                "primary-900": "#004626",
            }

        },
    },
    plugins: [],
}