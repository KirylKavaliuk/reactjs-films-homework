const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  name: 'client',
  mode: 'production',
  entry: {
    client: path.resolve(__dirname, '../../src/client/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../../build/js/'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  module: {
    rules: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
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
          localIdentName: '[hash:base64:12]',
        },
      }, {
        loader: 'sass-loader',
      }],
    }]
  },
}
