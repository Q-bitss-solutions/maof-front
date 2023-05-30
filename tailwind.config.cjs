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
      }

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
    },
  },
  plugins: [],
}
