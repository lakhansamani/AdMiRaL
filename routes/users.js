var express = require('express');
var router = express.Router();
var passport = require('./../auth');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',passport.authenticate('local',{
	failureRedirect:'/',
	successRedirect:'/home'
}));
router.get('/logout',function(req,res){
	req.logout();
	res.redirect('/');
});
module.exports = router;
