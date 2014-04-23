var express = require('express');
var router = express.Router();

function log(msg){
	console.log("admin: " + msg);
}

router.all('*', function(req,res,next){
	if(req.isAuthenticated()){
		log(req.ip + " requesting");
		return next();
	}
	log("unauthorized request, redirecting");
	return res.redirect('/');
});
router.get('/templates.js');
router.get('/', function(req, res) {
  res.render('secret', { title: 'Express' });
});

module.exports = router;
