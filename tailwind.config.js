/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#025BFF",
        secondary: "#fff",
        third: "#000337",
        fourth: "#00FFE7",
        light: "#181F4B",
      },
    },
  },
  plugins: [],
};
