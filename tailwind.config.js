/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'header': '#0F0E17',
        'dark': '#1B1814'
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
