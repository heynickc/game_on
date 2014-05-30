var dotenv = require('dotenv');
dotenv.load();

module.exports = {

	db: process.env.MONGOLAB_URL,

	sessionSecret: process.env.SESSION_SECRET,

	mailgun: {
		login: process.env.MAILGUN_LOGIN,
		password: process.env.MAILGUN_PASSWORD
	}
};