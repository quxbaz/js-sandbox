const path = require('path')
const abs = (...args) => path.resolve(__dirname, ...args)

module.exports = (mode='development') => ({

  mode,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          abs('./src'),
        ],
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    modules: [
      abs('node_modules'),
    ],
  },

})
