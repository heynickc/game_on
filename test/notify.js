var request = require('supertest');
var util = require('util');
var chai = require('chai');
var should = chai.should();
var cheerio = require('cheerio');
var async = require('async');

var app = require('../app.js');
var User = require('../models/User');

describe('POST /testNotify', function () {

	beforeEach(function (done) {
		User.remove({}).exec();
		return done();
	});

	it('should send 2 emails for 2 users', function (done) {

		var users = [];

		users[0] = new User({
			email: 'nick.chamberlain.jr@gmail.com',
			name: 'test',
			password: 'password'
		});

		users[1] = new User({
			email: 'nc38998@salisbury.edu',
			name: 'test',
			password: 'password'
		});

		async.each(users, function (user, done) {
			user.save(function (err) {
				if (err) return done(err);
				return done();
			});
		}, function (err) {
			if (err) return done(err);
			return done();
		});

		request(app)
			.post('/testNotify')
			.end(function (err, res) {
				if (err) return done(err);
				// console.log(res.body.responses.length);
				res.body.responses.length.should.equal(2);
				return done();
			});
	});

	afterEach(function (done) {
		User.remove({}).exec();
		return done();
	});
});