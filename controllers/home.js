var User = require('../models/User');

/**
 * GET /
 * Home page.
 */

exports.index = function (req, res) {
	User.find({}, 'profile.name', function (err, profiles) {
		res.render('home', {
			title: 'Home',
			profiles: profiles
		});
	});
};