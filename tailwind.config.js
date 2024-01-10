/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    fontFamily: {
      'signika': ['Signika', 'sans-serif'],
    },
    colors: {
      'blackground': ['#000000'],
      'font': ['#ffffff'],
      'gray': ['#282828'],
      'lightgray': ['#1E1E1E'],
      'lightblack': ['#111111'],
      'spotifygreen': ['#1ed760'],
      
    }
   }
  },
  plugins: [],
}

