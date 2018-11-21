const path = require('path');

module.exports = {
  name: 'client',
  mode: 'development',
  entry: {
    client: path.resolve(__dirname, '../../src/client/index.js')
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
  devtool: 'inline-source-map',
}