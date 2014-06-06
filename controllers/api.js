var User = require('../models/User');

//helper method for writing out json payloads
//trying to comply with
//https://github.com/interagent/http-api-design#return-appropriate-status-codes
var json = function(res, data) {
	res.writeHead(200, {
		'Content-Type': 'application/json; charset=utf-8'
	});
	if (typeof data === "string") res.write(data);
	else res.write(JSON.stringify(data));
	res.end();
};

/**
 * GET /contact
 * Contact form page.
 */

exports.getUsers = function(req, res) {
	User.find({}, 'email profile.name', function(err, users) {
		if (err)
			res.send(err);
		res.json(users);
	});
};