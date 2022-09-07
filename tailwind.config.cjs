/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Epilogue, Helvetica, Arial, sans-serif',
    },
    colors: {
      ...colors,
      black: "#151515",
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },

      colors: {
        "white-almost": "#FAFAFA",
        "grey-light": "#ADADAD",
        "grey-medium": "#686868",
        "custom": {
          1: "#726CEE",
          2: "#4BB1DA",
          3: "#EDD556",
          4: "#8E4CB6",
        }
      }
    },
  },
  plugins: [],
}
