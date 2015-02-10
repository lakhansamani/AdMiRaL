var express = require('express');
var router = express.Router();
var user =  require('./../models/category');
var passport = require('./../auth');
var category = require('./../models/category');

router.get('/categories_home', function(req, res, next) {
  if(req.session.passport.user === undefined){
  	res.redirect("/users/login");
  }
  else{
  		category.find(function(err,categories){
	  	if(err){
	  		console.log("error");
	  	}
	  	else{
	  		res.render('categories_home', { title: 'Categories',categories:categories,user:req.user });		
	  	}
	  })
  }
});
module.exports = router;