const document = require('../views/document');

function universal(req, res) {
  res.send(document());
  res.end();
}

module.exports = universal;
