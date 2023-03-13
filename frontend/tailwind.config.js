/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          text: '#fff',
          bg: {
            DEFAULT: '#20222F',
            card: '#252b43',
            dark: '#1d2029'
          }
        }
      }
    },
  },
  plugins: [],
}
