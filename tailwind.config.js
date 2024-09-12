/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary-color': '#D4B996FF', // or the specific color you want to use
        'primary-color': '#A04407', // or the specific color you want to use
      },
    },
  },
  plugins: [],
};
