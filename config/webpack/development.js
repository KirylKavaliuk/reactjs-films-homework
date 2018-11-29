const path = require('path');
const webpack = require('webpack');
const alias = require('../alias');

module.exports = {
  name: 'client',
  mode: 'development',
  entry: {
    client: [
      path.resolve(__dirname, '../../src/client/index.js'),
      'webpack-hot-middleware/client',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias,
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
    }, {
      test: /fonts.*\.(woff(2)?|ttf|eot|svg)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
        },
      }],
    }, {
      test: /icons.*\.svg$/,
      use: [{
        loader: 'babel-loader',
      }, {
        loader: 'react-svg-loader',
        options: {
          jsx: true,
        },
      }],
    }, {
      test: /\.(jpg|png)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
        },
      }],
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'inline-source-map',
};
