module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3,
      targets: '> 1%, last 2 versions, not dead'
    }],
  ],
  plugins: [
    'lodash',
    ['@babel/plugin-transform-runtime', {
      helpers: false,
      regenerator: true,
      useESModules: false,
    }],
  ],
  sourceType: 'unambiguous',
  comments: false,
};
