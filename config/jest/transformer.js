const babelJest = require('babel-jest');
const alias = require('../alias');

module.exports = babelJest.createTransformer({
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    ['module-resolver', {
      alias,
      extensions: ['.js', '.jsx'],
    }],
    ['css-modules-transform', {
      extensions: ['.scss'],
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      camelCase: true,
    }],
  ],
});