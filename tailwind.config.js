/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#375583",
        secondary: "#E0F1FF",
      },
    },
  },
  plugins: [],
};
