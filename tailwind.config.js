/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        figtree:"'Figtree', sans-serif",
        cabin:"'Cabin', sans-serif",
        sans:"'DM Sans', sans-serif",
        alegreya:"'Alegreya Sans SC', sans-serif"
      }
    },
  },
  plugins: [
    /*eslint-env node*/
    require('@tailwindcss/forms'),
  ],
}