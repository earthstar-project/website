module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,ts,tsx,md,mdx}', './remix.config.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'large': 'minmax(10rem, 15rem) 1fr',
        'standard': '1fr'
      },
          },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
