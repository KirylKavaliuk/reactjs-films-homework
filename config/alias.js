const path = require('path');

module.exports = {
  Pages: path.resolve(__dirname, '../src/client/pages'),
  Components: path.resolve(__dirname, '../src/client/components'),
  Containers: path.resolve(__dirname, '../src/client/containers'),
  Store: path.resolve(__dirname, '../src/client/store'),
  Images: path.resolve(__dirname, '../src/assets/images'),
  Fonts: path.resolve(__dirname, '../src/assets/fonts'),
  Icons: path.resolve(__dirname, '../src/assets/icons'),
  Actions: path.resolve(__dirname, '../src/client/store/actions'),
  Styles: path.resolve(__dirname, '../src/client/stylesheets'),
  Controllers: path.resolve(__dirname, '../src/server/controllers'),
  Views: path.resolve(__dirname, '../src/server/views'),
};

// Constants
// Models ?
