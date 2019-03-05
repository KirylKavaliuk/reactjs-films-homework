const router = require('express').Router();
const universal = require('./controllers/universal');
const echo = require('./controllers/echo');

router.get('/echo', echo);
router.get('/robots.txt', (req, res) => {
  const robots = `
    User-agent: *
    Disallow: 
    Crawl-delay: 10
  `;

  res.send(robots);
  res.end();
});
router.get('*', universal);


module.exports = router;
