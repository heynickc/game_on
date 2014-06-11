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
	User.find({}, 'email name playing', function (err, users) {
		if (err)
			res.send(err);

		json(res, users);
	});
};

/**
 * GET /api/users/:id
 * Gets user by id
 */

exports.getUser = function (req, res) {
	return User.findById(req.params._id, function (err, user) {
		if (err) {
			return json(res, err);
		}
		json(res, user);
	});
};

/**
 * PUT /api/users/:email
 * Puts update to user
 */

exports.putUser = function (req, res) {

	console.log(req.body);

	User.findOne({
		_id: req.params._id
	}, 'email profile.name playing', function (err, user) {
		if (err)
			res.send(err);

		user.playing = req.body.playing;

		user.save(function (err) {
			if (err)
				res.send(500, {
					error: err
				});

			json(res, user);
		});
	});
};

exports.postUser = function (req, res) {

	console.log(req.body);

	var user = new User();

	user.email = req.body.email;
	user.playing = req.body.playing;
	user.name = req.body.name;

	// Save the player and check for errors
	user.save(function (err, msg) {
		if (err)
			res.send(500, {
				error: err
			});

		json(res, user);
	});
};

// Create endpoint /api/user/:id for DELETE
exports.deleteUser = function (req, res) {

	console.log(req.body);

	User.findByIdAndRemove(req.params._id, function (err) {
		if (err)
			res.send(err);

		json(res, {
			message: 'User removed'
		});
	});
};