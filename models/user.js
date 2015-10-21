var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema({
	username:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	name:{
		type:String
	},
	modified:{
		type:Date,
		default:Date.now
	}
});
schema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
schema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
};
module.exports=mongoose.model('User',schema);
