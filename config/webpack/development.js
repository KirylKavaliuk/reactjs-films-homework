const path = require('path');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

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
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      files: 'src/**/*.scss',
      failOnError: false,
      quiet: false,
      syntax: 'scss',
    }),
  ],
  devtool: 'inline-source-map',
}
