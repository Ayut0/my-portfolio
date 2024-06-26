/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        headline: 'Arvo',
        content: 'Merriweather',
      },
      colors: {
        'light-heading': '#0F0E17',
        secondary: '#1F1E1C',
        dark: '#1B1814',
        'highlight-dark': '#FF8906',
        'headline-dark': '#E3E3E1',
        'paragraph-dark': '#E0DEDB',
        'light-primary': '#F2F1EE',
        'light-secondary': '#E8E4DF',
        'light-boldText': '2E2F3E',
        'icon-dark': '#A8B2D1',
      },
      width: {
        30: '30%',
        70: '70%',
        90: '90%',
      },
      margin: {
        center: '0 auto',
      },
      borderWidth: {
        10: '10px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
}
