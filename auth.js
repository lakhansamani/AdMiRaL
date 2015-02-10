var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
var user=require('./models/user');
passport.use(new LocalStrategy(

	function(username, password, done) {
		// code for register user
		// var u=new user();
		// u.username="admin@mysite.com";
		// u.password=u.generateHash("123456");
		// u.save(function(err,res){
		// 	if(err){
		// 		console.log(err);
		// 	}
		// 	else{

		// 	}
		// })
		user.findOne({username:username},function(err,user){
			console.log(user);
			if(err){
				return done(null, false);
			}
			else{
				if(!user){
					return done(null, false);
				}
				if(!user.validPassword(password)){
					return done(null, false);
				}
				else{
					return done(null,{username:username,name:user.name});
				}
				
			}
		})
		
	}
));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, {username:user.username,name:user.name});
});

module.exports = passport;