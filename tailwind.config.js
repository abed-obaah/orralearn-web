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
      },

    },
    screens: {
      'xs': '475px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
      require('@tailwindcss/forms'),
    ],

}