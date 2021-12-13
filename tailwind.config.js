module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,ts,tsx,md,mdx}', './remix.config.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'large': 'minmax(10rem, 15rem) minmax(600px, 1080px)',
        'standard': '1fr'
      },
          },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
