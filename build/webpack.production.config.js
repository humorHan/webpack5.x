const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const htmlPlugin = require('./lib/html-plugin.js');
const baseConfig = require('./webpack.base.config.js')
const generateCssLoaders = require('./lib/generate-css-loaders');

const mode = 'production';
const isProduction = mode === 'production';
module.exports = merge(baseConfig, {
  mode,
  cache: false,
  watch: false,
  devtool: false,
  output: {
    publicPath: '/',
    filename: 'js/[name]-[contenthash].js',
    chunkFilename: 'js/[name]-[contenthash].chunk.js'
  },
  resolve: {
    alias: {}
  },
  module: {
    rules: [{
      test: /\.vue$/i,
      use: {
        loader: 'vue-loader',
        options: {
          hotReload: false,
        },
      }
    }, {
      test: /\.s?(c|a)ss$/i,
      use: generateCssLoaders(isProduction),
    }]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        parallel: true,
        // sourceMap 真实项目可能会集合SourceMapDevToolPlugin做js反解功能
        // sourceMap: sourceMapEnabled,
        terserOptions: {
          ecma: 5,
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
      chunkFilename: 'css/[name]-chunk-[contenthash].css',
      ignoreOrder: true,
    }),
    htmlPlugin(isProduction),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   openAnalyzer: false
    // })
  ]
});
