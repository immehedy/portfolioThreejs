const { keyframes } = require('styled-components')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ['rounded'],
      colors:{
        'btn-primary': '#d54da1',
      },
      backgroundImage : {
        'main-bg' : "url('/img/bg.jpeg')"
      },
      keyframes: {
        juggling : {
          'to' : {transform: 'translateY(20px)'}
        }
      },
      animation: {
        'bouncing-slow' : 'juggling 1.5s infinite ease alternate'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
