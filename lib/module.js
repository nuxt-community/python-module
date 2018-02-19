module.exports = function PythonModule (moduleOptions) {
  var options = Object.assign({}, this.options.python, moduleOptions)

  if (options.compiler === undefined) {
    options.compiler = 'pj'
  }

  this.nuxt.options.extensions.push('py')

  this.extendBuild((config, { isClient, isServer }) => {
    config.devtool = '#cheap-module-eval-source-map'
    config.resolve.extensions.push('.py')

    const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
    vueLoader.options.loaders.py = { loader: 'py-loader',
      options: options }

    config.module.rules.push({
      test: /\.py$/,
      loader: 'py-loader',
      options: options
    })
  })
}

module.exports.meta = require('../package.json')
