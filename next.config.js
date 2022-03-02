const withNextra = require('nextra')({
  theme: 'nextra',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})
module.exports = withNextra()
