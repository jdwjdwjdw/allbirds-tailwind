const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'Poppins', 'system-ui'],
      },
      colors: {
        lime: colors.lime,
        gray: colors.gray,
        green: colors.green,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
