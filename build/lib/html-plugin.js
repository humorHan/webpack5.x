const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils');

module.exports = function htmlPlugin(isProduction) {
  let conf = {
    template: utils.resolve('src', 'index.html'),
    filename: 'index.html',
    inject: 'body',
    chunks: ['manifest', 'vendor', 'commons'],
    chunksSortMode: 'manual',
  };
  if (isProduction) {
    conf.minify = {
      caseSensitive: false,
      removeComments: true,
      removeEmptyAttributes: true,
      collapseWhitespace: true
    };
  }
  return new HtmlWebpackPlugin(conf);
};
