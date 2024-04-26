/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lime: '#A4FFA2',
        magenta: '#F47DDA',
        magenta50: '#F47DDA80',
        tan: '#CEC5B4',
        teal: '#2E6D81',
        cyan: '#7DE6F4',
        black: '#050D14',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'cormorant': ['Cormorant Garamond', 'serif']
      }
    },
  },
  plugins: [],
}