/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Arial, sans-serif",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      blue: "#0000EE",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
