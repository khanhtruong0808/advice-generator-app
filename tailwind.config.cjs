/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 0 30px 2px hsl(150, 100%, 66%)",
      },
      colors: {
        primary: {
          50: "hsl(193, 38%, 86%)",
          100: "hsl(150, 100%, 66%)",
        },
        neutral: {
          50: "hsl(217, 19%, 38%)",
          100: "hsl(217, 19%, 24%)",
          200: "hsl(218, 23%, 16%)",
        },
      },
    },
  },
  plugins: [],
};
