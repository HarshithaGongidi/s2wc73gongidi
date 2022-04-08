var express = require('express');
var router = express.Router();

/* GET RABBIT. */
router.get('/', function(req, res, next) {
  res.render('Rabbit', { title: 'Search Results - Rabbit' });
});

module.exports = router;
