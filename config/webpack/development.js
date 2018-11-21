const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve('../../src/client/index.js'),
  output: {
    path: path.resolve('../../build'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
}