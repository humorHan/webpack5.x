const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const utils = require('./lib/utils.js');

module.exports = {
  entry: {
    index: utils.resolve('src/index.js'),
  },
  output: {
    path: utils.resolve('dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: {
        loader: 'vue-loader',
        options: {
          hotReload: true,
        },
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/i,
      use: 'url-loader'
    }, {
      test: /\.(png|gif|jpg|jpeg|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 4096,
        }
      }]
    }, {
      test: /\.js$/,
      exclude: [
        /\bcore-js\b/,
        /\bwebpack\/buildin\b/,
        /\bvue-loader\b/
      ],
      use: {
        loader: 'babel-loader',
      }
    }, {
      test: /\.(mp3|mp4|pdf)$/i,
      use: [{
        loader: 'file-loader',
      }],
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20480,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          priority: 100,
        },
        commons: {
          name: 'commons',
          priority: 90,
          minChunks: 3,
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  },
};
