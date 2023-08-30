/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mountain: "#08234B",
      },
      fontFamily: {
        Josefin: ["Josefin Sans"],
        Victor: ["Victor Mono"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
