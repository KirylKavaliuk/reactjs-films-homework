const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../../config/webpack/development');

const routes = require('./routes');

const app = express();
const port = 8080;
const compiler = webpack(config);

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));
  app.use(express.static('src/assets'));
} else {
  app.use(express.static('build'));
  app.use(express.static('build/assets'));
}

app.use(routes);

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line
    console.log(err);
  } else {
    // eslint-disable-next-line
    console.log(`proxy is listening on port: ${port}`);
  }
});
