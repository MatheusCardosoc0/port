/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
        "black-gradient": "linear-gradient(to top left, rgb(3, 0, 34), rgb(1, 147, 60), rgb(32, 104, 11))",
        "radial": "linear-gradient(to top left, rgb(2, 0, 23), rgb(3, 0, 39) , rgb(3, 86, 7));"
      },
      animation: {
        bounce: 'bounce 4s ease-in-out infinite'
      },
      keyframes : {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(20px)',
          }
        },
    },
  },
  plugins: [],
}
}
