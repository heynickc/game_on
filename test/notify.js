var request = require('supertest');
var util = require('util');
var chai = require('chai');
var should = chai.should();
var cheerio = require('cheerio');
var async = require('async');

var app = require('../app.js');
var User = require('../models/User');

describe('POST /notify', function () {

	beforeEach(function () {
		User.remove({}).exec();
	});

	it('duplicate user redirects to signup', function (done) {

		var user = new User({
			email: 'nick.chamberlain.jr@gmail.com',
			name: 'test',
			password: 'password'
		});

		user.save(function (err) {
			if (err) return done(err);
			// post notification button
			request(app)
				.post('/notify')
				.end(function (err, res) {
					if (err) return done(err);
					return done();
				});
		});
	});

	afterEach(function () {
		User.remove({}).exec();
	});
});