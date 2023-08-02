/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        mainOrange: '#FF9934',
        mainBlue: '#133A5E',
        normalGray: '#EEEEEE',
        yellowishGray: '#FCF8E1',
        darkGray: '#3C3C3D',
        lightGreen: '#8FC83D',
      },
    },
  },
  plugins: [],
};
