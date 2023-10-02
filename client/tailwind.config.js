/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          '500': '#4DB6AC',
          '600': '#3F9F93',
          '700': '#357F72',
          '800': '#2C665E',
          '900': '#214C49',
        },
      },
    },
  },
  plugins: [],
}