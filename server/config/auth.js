var passport = require('passport');


exports.authenticate = function(req,res,next) {
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
}
