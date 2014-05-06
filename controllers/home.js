var User = require('../models/User');

/**
 * GET /
 * Home page.
 */

exports.index = function (req, res) {
	User.find({}, 'email', function (err, user) {
		res.render('home', {
			title: 'Home',
			users: user
		});
	});
};