const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  srcDir: __dirname,
  dev: false,
  modules: ['@@']
}
