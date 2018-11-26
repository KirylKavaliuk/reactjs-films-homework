const router = require('express').Router();
const universal = require('./controllers/universal');

router.get('*', universal);

module.exports = router;
