/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
        manrope: ["Manrope"],
      },
      fontSize: {
        base: ["15px"],
        sm: ["20px"],
        medium: ["24px"],
      },
      backgroundImage: {
        'parallax': "url('https://i.ibb.co/Mk8VX6t/parallax.jpg')",
      }
    },
  },
  plugins: [],
};
