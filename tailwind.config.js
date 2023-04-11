/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: "100px",
        400: "400px",
        350: "350px",
        237: "237px",
        4000: "4000px",
        160: "160px",
        "26rem": "26rem",
      },
      colors: {
        "custom-gris": "#d3cdbf",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
