const { resolve } = require('path')

// Notice: This file is for example only.
// For your own projects you may have to simply include @nuxtjs/python module
// Please see official README and Docs

module.exports = {
  rootDir: resolve(__dirname, '..'),
  srcDir: __dirname,
  dev: false,
  modules: [
    '@@',
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'Nuxt Python Module',
    description: 'Write Nuxt.js apps in Python!'
  }
}
