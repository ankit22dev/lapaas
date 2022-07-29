module.exports = {
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "mainRed": "#ff0000",
                "liteYellow": "#f4ddb5"
            }
        },
    },
    plugins: [],
}