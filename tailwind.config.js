/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "469px",
      sm: "641px",
      md: "769px",
      lg: "1069px",
    },
  },
  plugins: [],
};


