var express = require('express');
var router = express.Router();
var fn = require('./user/index1.js');

/* GET users listing. */
router.get('/', fn.fn);

module.exports = router;