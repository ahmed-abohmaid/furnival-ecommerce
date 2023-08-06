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
        darkGray2: '#939393',
        lightGreen: '#8FC83D',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
