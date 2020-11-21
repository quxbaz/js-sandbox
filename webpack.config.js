const path = require('path')
const abs = (...args) => path.resolve(__dirname, ...args)
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        include: [
          abs('node_modules/quick-state'),
        ],
      },
      {
        test: /\.js$/,
        include: [abs('./src')],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?{"modules": {"localIdentName": "[path][name]__[local]"}}',
        ],
      },
    ],
  },

  resolve: {
    modules: [
      abs('node_modules'),
    ],
  },
}
