/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{html,js}"],
  theme: {
    extend: {
      animation:{
        runningTime: 'run 7s linear 1 forwards'
      },
      keyframes: {
        run: {
          '0%': { width: '0%' },
          '100%': { width: '80%' },
        }
      }
    },
  },
  plugins: [],
  mode: 'jit',
}