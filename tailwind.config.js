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
        alegreya:"'Alegreya Sans SC', sans-serif",
        space:"'Space Grotesk', sans-serif",
        openSans:"'Open Sans', sans-serif"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
      require('@tailwindcss/forms'),
    ],

}