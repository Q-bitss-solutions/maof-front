/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '128': '35.5rem',
      },
      fontFamily:{
        "monserrat" : ['"Montserrat"', 'sans-serif']
      },

    },
    colors: {
      'red': '#9d2449',
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#cccccc',
      'gray-50': '#f5f5f5',
      'gray-100': '#dddddd',
      'gray-200': '#DCE0E0',
      'gray-900': '#404041',
      'gray-800': '#545454',
      'gray-600': '#6F7271',
      'blue': '#66afe9',
      'brown-300': '#B38E5D',
      'green': '#00FF00',
      'orange': '#FF7514',
      'red-of': '#9F2241',
      'black-of' : '#545454',
      'green-of': '#235B4E',
      'beige-of': '#DDC9A3',
      'gray-of': '#98989A',
      'red-dark-of': '#691C32',
      'green-dark-of': '#10312B',
      'gold-of': '#BC955C',
      'gray-dark-of': '#6F7271',
    },
  },
  plugins: [],
}
