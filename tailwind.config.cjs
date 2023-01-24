/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'dark-violet': {
        'DEFAULT': 'hsl(278, 68%, 11%)',
        'gradient-from': 'hsl(249, 99%, 64%)',
        'gradien-to': 'hsl(278, 94%, 30%)'
      },
      'grayish-violet': {
        'light': 'hsl(270, 3%, 87%)',
        'dark': 'hsl(279, 6%, 55%)'
      }
    }
    },
  },
  plugins: [],
}