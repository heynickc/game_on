var User = require('../models/User');

/**
 * GET /
 * Home page.
 */

exports.index = function (req, res) {
	User.find({}, 'name', function (err, users) {
		res.render('home', {
			title: 'Home',
			users: users
		});
	});
};