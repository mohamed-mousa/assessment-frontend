/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#DB4444",
      },
      fontFamily: {
        sans: ["Poppins", "Inter"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
