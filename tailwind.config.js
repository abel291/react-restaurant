const { colors: defaultColors } = require("tailwindcss/defaultTheme")
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6.5rem",
            },
        },

        colors: {
            ...defaultColors,
            red: {
                DEFAULT: "#e3000e",
            },
        },
        extend: {
            fontFamily: {
                primary: ["Oswald"],
                roboto: ["Roboto"],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
