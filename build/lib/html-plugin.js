const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function htmlPlugin(isProduction) {
  let conf = {
    filename: 'index.html',
    inject: false,
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
