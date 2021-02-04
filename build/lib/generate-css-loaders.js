const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * 获取style-loader的规则
 * @param {*} isProdution mode是否是production模式
 */
function getStyleLoaderRule(isProdution) {
  return {
    loader: isProdution ? MiniCssExtractPlugin.loader : 'style-loader',
    options: isProdution ? {} : {
      injectType: 'styleTag'
    },
  }
}
/**
 * 获取css-loader的规则
 * @param {*} isProdution mode是否是production模式
 * @param {*} useModules 使用css module
 */
function getCssLoaderRule(isProdution, useModules = false) {
  const localIdentName = isProdution ? '[local]_[hash:base64:8]' : '[path][name]__[local]';
  return {
    loader: 'css-loader',
    options: {
      sourceMap: !isProdution,
      importLoaders: 1,
      modules: useModules ? {
        localIdentName,
      } : null,
    }
  };
}

/**
 * 获取postcss-loader规则
 * @param {*} isProdution mode是否是production模式
 */
function getPostcssLoaderRule(isProdution) {
  return {
    loader: 'postcss-loader',
    options: {
      config: {
        path: process.cwd(),
      },
      ident: 'postcss',
      plugins: [
        require('autoprefixer'),
      ],
      sourceMap: !isProdution,
    }
  }
}

/**
 * 获取resolve-url-loader规则
 * @param {*} isProdution mode是否是production模式
 */
function getResolveUrlLoaderRule(isProdution) {
  return {
    loader: 'resolve-url-loader',
    options: {
      sourceMap: !isProdution,
    },
  }
}

module.exports = function generateCssLoaders(isProduction) {
  return {
    oneOf: [{
      resourceQuery: /module/,
      use: [
        getStyleLoaderRule(isProduction),
        getCssLoaderRule(isProduction, true),
        getPostcssLoaderRule(isProduction),
        getResolveUrlLoaderRule(isProduction)
      ],
    }, {
      use: [
        getStyleLoaderRule(isProduction),
        getCssLoaderRule(isProduction, false),
        getPostcssLoaderRule(isProduction),
        getResolveUrlLoaderRule(isProduction)
      ],
    }],
  }
};
