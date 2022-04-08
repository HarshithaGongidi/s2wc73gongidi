var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Rabbit', function(req, res, next) {
  res.render('Rabbit', { title: 'Search Results - Rabbit' });
});

module.exports = router;
