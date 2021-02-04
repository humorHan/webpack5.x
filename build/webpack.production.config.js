const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const utils = require('./lib/utils.js');
const htmlPlugin = require('./lib/html-plugin.js');
const baseConfig = require('./webpack.base.config.js')
const generateCssLoaders = require('./lib/generate-css-loaders');

const mode = 'production';
const isProduction = mode === 'prodution';
module.exports = merge(baseConfig, {
  mode,
  cache: false,
  watch: false,
  devtool: false,
  output: {
    publicPath: '/dist/',
    filename: 'js/[name]-[hash].js',
    chunkFilename: 'js/[name]-chunk-[chunkhash].js'
  },
  resolve: {
    alias: {}
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader',
        options: {
          hotReload: false,
        },
      }
    }, {
      test: /\.s?(c|a)ss$/,
      oneOf: generateCssLoaders(isProduction).oneOf,
    }, {
      test: /\.(png|jpe?g|gif)$/,
      include: [utils.resolve('src/img')],
      use: [{
        loader: 'url-loader',
        options: {
          limit: 4096,
          name: 'img/[name].[ext]?v=[hash:8]'
        }
      }]
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
