const router = require('express').Router();
const universal = require('./controllers/universal');
const echo = require('./controllers/echo');

router.get('/echo', echo);
router.get('*', universal);

module.exports = router;
