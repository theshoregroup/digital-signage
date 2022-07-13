const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["metropolis", "sans-serif"],
        ...defaultTheme.fontFamily.serif,
        ...defaultTheme.fontFamily.mono,
      },
    }
  },
  plugins: [],
}