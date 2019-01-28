const path = require('path');

module.exports = {
  pages: path.resolve(__dirname, '../src/client/pages'),
  components: path.resolve(__dirname, '../src/client/components'),
  containers: path.resolve(__dirname, '../src/client/containers'),
  reducers: path.resolve(__dirname, '../src/client/store/reducers'),
  contexts: path.resolve(__dirname, '../src/client/contexts'),
  store: path.resolve(__dirname, '../src/client/store'),
  images: path.resolve(__dirname, '../src/assets/images'),
  fonts: path.resolve(__dirname, '../src/assets/fonts'),
  icons: path.resolve(__dirname, '../src/assets/icons'),
  actions: path.resolve(__dirname, '../src/client/store/actions'),
  styles: path.resolve(__dirname, '../src/client/stylesheets'),
  controllers: path.resolve(__dirname, '../src/server/controllers'),
  views: path.resolve(__dirname, '../src/server/views'),
  utils: path.resolve(__dirname, '../src/utils'),
};
