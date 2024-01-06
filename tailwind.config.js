/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      recoleta: ["Recoleta", "sans-serif"],
      Lora: ["Lora", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        heroBg: "url('/src/assets/needyPicture.jpg')",
      },
    },
  },
  plugins: [],
};
