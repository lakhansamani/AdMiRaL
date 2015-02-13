var express = require('express');
var router = express.Router();
var user =  require('./../models/category');
var passport = require('./../auth');
var category = require('./../models/category');

router.get('/categories_home', function(req, res, next) {
  if(req.session.passport.user === undefined){
  	res.redirect("/");
  }
  else{
  		category.find({user_id:req.user._id},function(err,categories){
	  	if(err){
	  		console.log("error");
	  	}
	  	else{
	  		//console.log(req.user._id);
	  		res.render('categories_home', { title: 'Categories',categories:categories,user:req.user });		
	  	}
	  })
  }
});
router.get('/add_category',function(req,res,next){
	if(req.session.passport.user === undefined){
		res.redirect('/');
	}
	else{
		res.render('add_category',{title:'Add categories',user:req.user})
	}
});
router.post('/add_post',function(req,res,err){
	if(req.session.passport.user === undefined){
		res.redirect('/');
	}
	else{
		var c = new category({
			name:req.body.category_name,
			user_id:req.body.user_id
		})
		c.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				res.redirect("/category/categories_home");
			}
		})
	}
});

module.exports = router;