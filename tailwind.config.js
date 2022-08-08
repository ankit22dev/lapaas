module.exports = {
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "mainRed": "#D14B39",
                "liteYellow": "#f4ddb5",
                "liteBlue": "#193247",
            },
            backgroundImage: {
                'TitleImgCardBg': "url('../public/imgs/backgroundWhite.png')",
              },
        },
    },
    plugins: [],
}