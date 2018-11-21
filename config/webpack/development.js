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
  module: {
    rules: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
}