/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sidenav-gray': '#212124',
        'background': '#171719',
        'light-gray': '#1F1F22',
        'border': 'rgba(235, 235, 255, 0.05)',
        'hover': '#4C4E54'
      },
      minWidth:{
        'percent-14': '14%'
      },
      maxWidth:{
        'p': '200px'
      },
      maxHeight:{
        '297': '297px'
      },
      fontSize:{
        '10': '10px'
      },
      width:{
        'containerSection': '86%'
      },
      borderRadius:{
        '3': '3px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
