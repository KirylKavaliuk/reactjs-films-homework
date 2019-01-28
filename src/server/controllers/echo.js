function echo(req, res) {
  res.json({ text: req.query.text });
  res.end();
}

module.exports = echo;
