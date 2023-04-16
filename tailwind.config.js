/** @type {import('tailwindcss').Config} */
// import image from "./src/assets/images/bannerBg.jpg";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      backgroundImage: {
        bannerBg: "url('./assets/images/bannerBg.jpg')",
      },
    },
  },
  plugins: [],
};
