const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('../../config/webpack/development');

const routes = require('./routes');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(routes);

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`proxy is listening on port: 8080`);
  }
});