/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg': '960px',
      'xl': '1280px',
    },
    container:{
      center: true,
      padding: '1rem',
    },
    extend: {},
  },
  plugins: [],
}