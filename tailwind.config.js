/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "480px", // Custom small screen breakpoint
        tablet: "768px", // Custom medium screen breakpoint
        desktop: "1024px", // Custom large screen breakpoint
        xl: "1280px", // Custom extra-large screen breakpoint
        "2xl": "1536px", // Custom 2xl breakpoint
      },
      colors: {
        blueish: {
          50: "#3B82F6",
          100: "#3C45F6",
        },
        greenish: "#2EBAB3",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
