// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called

var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
	name:String,
	email:String,
	password:String
});

// Compile model from schema
var User = mongoose.model('User', UserModelSchema );
module.exports = User
