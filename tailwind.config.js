module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        lightBlue: '#6666ff',
        darkBlue: '#5e17eb',
        gold: '#c9e265',
      },
    },
  },
  plugins: [],
};
