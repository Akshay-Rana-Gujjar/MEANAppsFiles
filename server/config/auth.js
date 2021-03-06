var passport = require('passport');


exports.authenticate = function(req,res,next) {
	req.body.username = req.body.username.toLowerCase();
	var auth = passport.authenticate('local',function(err,user){
		if(err) {return next(err);}
		if(!user) {res.send({success:false});}
		// logIn() is a function that passport adds to the request object
		// Normally don't need to tell passport to login because it does that automatically but here we're doing it through an Ajax POST
		req.logIn(user, function(err){
			if(err) {return next(err);}
			res.send({success:true, user:user});
		})
	});
	auth(req,res,next);
};

exports.requiresApiLogin = function(req,res,next){
	if(!req.isAuthenticated()) {
		res.status(403);
		res.end();
	} else {
		next();
	}
};

exports.requiresRole = function(role) {
	return function(req,res,next) {
		if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
			res.status(403);
			res.end();
		} else {
			next();
		}
	}
};
