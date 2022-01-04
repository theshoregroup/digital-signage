module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend:
    {
      colors: {
        shoreblue: {
          "50": "#696caa",
          "100": "#5f62a0",
          "200": "#555896",
          "300": "#4b4e8c",
          "400": "#414482",
          "500": "#373a78",
          "600": "#2d306e",
          "700": "#232664",
          "800": "#191c5a",
          "900": "#0f1250"
        }
      }
    },
  variants: {
    extend: {},
  },
  plugins: [],
}}