var User = require('../models/User');

//helper method for writing out json payloads
//trying to comply with
//https://github.com/interagent/http-api-design#return-appropriate-status-codes
var json = function (res, data) {
	res.writeHead(200, {
		'Content-Type': 'application/json; charset=utf-8'
	});
	if (typeof data === "string") res.write(data);
	else res.write(JSON.stringify(data));
	res.end();
};

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
	}, 'email profile.name playing', function (err, user) {
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

exports.postUser = function (req, res) {

	var user = new User();

	user.email = req.body.email;
	user.playing = req.body.playing;
	user.profile.name = req.body.name;

	// Save the player and check for errors
	user.save(function (err) {
		if (err)
			res.send(err);

		res.json(user);
	});
};