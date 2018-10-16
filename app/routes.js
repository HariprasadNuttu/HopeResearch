var User = require('./models/User');
var emailService = require('./mailer_config');
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
	app.post("/users/sign_up",function(req,res){

		var createUser = new User(req.body);
		console.log(createUser)
		createUser.save(function(err,data){
			console.log(err)
			if(err) throw err;
			console.log(data)
			emailService().send(data.email, 'Hood River tours on sale today!',
			'Get \'em while they\'re hot!');
			res.send({success:true,message:["User Created Susccefully"]})
		})
	 // res.send("Haripar");
	})

	app.post("/users/sign_in",function(req,res){

		var createUser = new User(req.body);
		createUser.save(function({err,name}){
			console.log(err)
				if(err) throw err;
				console.log(name)
				res.send({success:true,message:["User Created Susccefully"]})
		})
	 // res.send("Haripar");
	})

};
