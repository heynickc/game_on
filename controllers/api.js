var User = require('../models/User');

/**
 * GET /api/users
 * Gets all users
 */

exports.getUsers = function (req, res) {
	User.find({}, 'email profile.name', function (err, users) {
		if (err)
			res.send(err);
		res.json(users);
	});
};

/**
 * PUT /api/users/:email
 * Puts update to user
 */

exports.putUser = function (req, res) {
	// Use the Beer model to find a specific beer
	User.findOne({
		email: req.params.email
	}, function (err, user) {
		if (err)
			res.send(err);

		// Update the existing user playing status
		user.playing = req.body.playing;

		// Save the beer and check for errors
		user.save(function (err) {
			if (err)
				res.send(err);

			res.json(user);
		});
	});
};