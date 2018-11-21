const document = require('../views/document');

module.exports = function(req, res) {
  res.send(document());
  res.end();
}