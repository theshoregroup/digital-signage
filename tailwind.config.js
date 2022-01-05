module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'monospace' ],
      sans: ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif' ],
      serif: ['IBM Plex Serif', 'Georgia', 'Times', 'serif']
    },
    extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
}}