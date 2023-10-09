/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        playfair:['Playfair Display', 'serif']
      },
      fontWeight: {
        semibold: '600',
        regular: '400',
      },
    },
  },
  plugins: [],
}