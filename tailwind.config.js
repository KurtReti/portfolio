/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Josefin": ["Josefin Sans"],
      },
    },
    
  },
  plugins: [
    require('tailwind-scrollbar'),
],
}
