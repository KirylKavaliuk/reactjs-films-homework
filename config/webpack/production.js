const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const alias = require('../alias');

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
    extensions: ['.js', '.jsx'],
    alias: alias,
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [{
      test: /\.js(x)?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            camelCase: true,
            modules: true,
            minimize: true,
            importLoaders: 2,
            localIdentName: '[hash:base64:10]',
          },
        }, {
          loader: 'sass-loader',
          options: {
            outputStyle: 'compressed',
          },
        }],
      }),
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
          outputPath: '../../build/assets',
          publicPath: '/',
        }
      }]
    }, {
      test: /\.(jpg|png)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          outputPath: '../../build/assets',
          publicPath: '/',
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '../../'),
      verbose: true, 
      dry: false
    }),
    new ExtractTextPlugin('../../build/css/styles.css'),
  ]
}
