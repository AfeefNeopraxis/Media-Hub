/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        popup: "popUp .1s linear forwards",
      },
      keyframes: {
        popUp: {
          "0%": { transform: "scale(.5)", opacity: "0" }
        },
      },
    },
  },
  plugins: [],
};
