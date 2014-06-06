var User = require('../models/User');

/**
 * GET /contact
 * Contact form page.
 */

exports.getUsers = function (req, res) {
	User.find({}, 'email profile.name', function (err, users) {
		if (err)
			res.send(err);
		res.json(users);
	});
};