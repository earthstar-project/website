const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,ts,tsx,md,mdx}', './remix.config.js', './docs/**/*.{md,mdx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      'es-purple': '#AD3CFF',
      'es-green': '#05AD60',
      'es-blue': '#0B71C3',
      'es-yellow': '#FFCA3E',
      'es-gray': '#DFDFDF'
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      display: ['Dover Sans Display', ...defaultTheme.fontFamily.sans],
      sans: ['Dover Sans Text', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      gridTemplateColumns: {
        'large': 'minmax(10rem, 12rem) minmax(600px, 1080px)',
        'standard': '1fr'
      },
          },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}
