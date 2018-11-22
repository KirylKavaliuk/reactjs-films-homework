const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`proxy is listening on port: 8080`);
  }
});
