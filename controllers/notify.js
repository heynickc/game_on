var async = require('async');
var _ = require('underscore');
var nodemailer = require('nodemailer');
var secrets = require('../config/secrets');
var User = require('../models/User');

/**
 * POST /
 * Home page.
 */

exports.postNotify = function (req, res, next) {
	async.waterfall([

			function (done) {
				User.find({}, 'email', function (err, emails) {
					if (err) return done(err);
					done(err, emails);
				});
			},

			function (emails, done) {
				var smtpTransport = nodemailer.createTransport('SMTP', {
					service: 'Mailgun',
					auth: {
						user: secrets.mailgun.login,
						pass: secrets.mailgun.password
					}
				});

				async.eachSeries(emails, function (email, done) {
					var mailOptions = {
						to: email.email,
						from: 'Ultimate@heynickc.com',
						subject: 'Test',
						text: 'Hello'
					};
					smtpTransport.sendMail(mailOptions, function (err) {
						done(err);
					});
				}, function (err) {
					req.flash('success', {
						msg: 'Email has been sent to the players!'
					});
					done(err);
				});
			}
		],

		function (err) {
			if (err) return next(err);
			res.redirect('/');
		});
};