/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ['rounded']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
