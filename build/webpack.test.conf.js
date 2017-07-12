// This is the webpack config used for unit tests.

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var Dotenv = require('dotenv-webpack')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  // Temp solution to get webpack to compile files correctly
  module: {
    rules: [
      {
        test: /\.html/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        loaders: [ "scss" ]
      }
    ]
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env'),
      'CONTENTFUL_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN)
    }),
    new Dotenv({
      path: './.env'
    }),
    new FriendlyErrorsPlugin()
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
