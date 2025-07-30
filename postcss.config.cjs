module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js' // optional: specify if your config isn't in the root
    }),
    require('autoprefixer'),
  ]
}
