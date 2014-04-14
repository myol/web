var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});
router.get('/article', function(req, res) {
  res.render('article', { title: 'Express' });
});

module.exports = router;
