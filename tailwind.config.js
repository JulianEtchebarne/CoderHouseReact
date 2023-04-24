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
        170: "170px",
        "4.25rem": "4.25rem",
        "26rem": "26rem",
        "11rem": "11rem",
        "12.5rem": "12.5rem",
        "18.5rem": "18.5rem",
        "16.5rem": "16.5rem",
        "19.25rem": "19.25rem",
        "n4.25rem": "-4.25rem",
      },
      colors: {
        "custom-gris": "#d3cdbf",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
