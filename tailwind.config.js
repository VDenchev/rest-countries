/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      light: {
        text: 'hsl(200, 15%, 8%)',
        input: 'hsl(0, 0%, 52%)',
        bg: 'hsl(0, 0%, 98%)'
      },
      dark: {
        elements: 'hsl(209, 23%, 22%)',
        bg: 'hsl(207, 26%, 17%)'
      },
      ...colors
    }
  },
  plugins: [],
}
