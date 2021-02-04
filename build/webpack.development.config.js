const webpack = require('webpack');
const { merge } = require('webpack-merge');
const utils = require('./lib/utils.js');
const htmlPlugin = require('./lib/html-plugin.js');
const baseConfig = require('./webpack.base.config.js')
const generateCssLoaders = require('./lib/generate-css-loaders');

const mode = 'development';
const isProduction = mode === 'prodution';
module.exports = merge(baseConfig, {
  mode,
  cache: true,
  watch: true,
  devtool: 'inline-source-map',
  output: {
    publicPath: '/dist/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-chunk.js',
  },
  resolve: {
    alias: {}
  },
  module: {
    rules: [{
      test: /\.s?(c|a)ss$/i,
      use: generateCssLoaders(isProduction),
    }]
  },
  plugins: [
    htmlPlugin(isProduction),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:8080'
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\//, to: '/dist/index.html' },
      ]
    },
    quiet: true,
    port: 8081,
    clientLogLevel: 'none',
    contentBase: utils.resolve('dist'),
    compress: true,
    hot: true,
    noInfo: true,
    open: true,
    openPage: './dist/index.html',
    logLevel: 'error'
  }
});
