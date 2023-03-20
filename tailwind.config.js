/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: "100px",
        400: "400px",
      },
      colors: {
        "custom-gris": "#d3cdbf",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
