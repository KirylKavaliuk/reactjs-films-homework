const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.static('src/assets'));
app.use(express.static('build'));
app.use(express.static('build/assets'));

app.use(routes);

console.log(process.env.NODE_ENV);

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`proxy is listening on port: 8080`);
  }
});
