var auth = require('./auth'),
		users = require('../controllers/users'),
		mongoose = require('mongoose'),
		User = mongoose.model('User');

module.exports = function(app) {

	app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
	app.post('/api/users', users.createUser);

	app.get('/partials/*', function (req, res) {
		res.render('../../public/app/' + req.params);
	});

	app.post('/login', auth.authenticate);

	app.post('/logout', function(req,res){
		req.logout(); // method was added to req by passport module
		res.end();
	});

	app.get('*', function (req, res) {
		res.render('index', {
			bootstrappedUser: req.user
		});
	});
};
