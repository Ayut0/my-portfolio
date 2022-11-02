/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'headline': 'Arvo',
        'content': 'Merriweather',

      },
      colors: {
        'header': '#0F0E17',
        'dark': '#1B1814',
        'headline-dark': '#FF8906'
      },
      width: {
        '90': '90%'
      },
      margin: {
        'center': '0 auto'
      },
      borderWidth: {
        '10': '10px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
