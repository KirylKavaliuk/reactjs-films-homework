const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  mode: 'development',
  entry: {
    client: [
      path.resolve(__dirname, '../../src/client/index.js'),
      'webpack-hot-middleware/client'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader'],
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
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
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
}
