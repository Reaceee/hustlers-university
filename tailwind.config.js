/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font: 'barlow'
      },
      colors: {
        dark: '#5B3927',
        lbrown: '#9B6E56',
      }
    },
  },
  plugins: [],
}
