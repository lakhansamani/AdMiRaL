var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});
router.get('/home', function(req, res, next) {
  if(req.session.passport.user === undefined){
  	res.redirect("/");
  }
  else{
  	console.log(req.user);
	res.render('home', { title: 'Dashboard',user:req.user });
  }
});
module.exports = router;
