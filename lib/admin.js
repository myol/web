var express = require('express');
var router = express.Router();

function log(msg){
	console.log("admin: " + msg);
}

router.all('*', function(req,res,next){
	if(req.isAuthenticated()){
		log(req.ip + " requesting");
	}
	log("unauthorized request, redirecting");
	return res.redirect('/');
});
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});
router.get('/article', function(req, res) {
  res.render('article', { title: 'Express' });
});

module.exports = router;
