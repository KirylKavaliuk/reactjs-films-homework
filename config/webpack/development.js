const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');

module.exports = merge(base, {
  mode: 'development',
  entry: {
    client: [
      path.resolve(__dirname, '../../src/client/index.js'),
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../build'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          camelCase: true,
          modules: true,
          localIdentName: '[name]__[local]_[hash:base64:5]',
        },
      }, {
        loader: 'sass-loader',
      }],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'inline-source-map',
});
