/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        '90s-purple': '#9370DB',
        '90s-pink': '#FF69B4',
        '90s-green': '#32CD32',
        '90s-yellow': '#FFD700',
      },
      fontFamily: {
        '90s': ['"Comic Sans MS"', 'cursive', 'sans-serif']
      },
    },
  },
  plugins: [],
};
