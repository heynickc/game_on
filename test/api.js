var request = require('supertest');
var util = require('util');
var chai = require('chai');
var should = chai.should();
var async = require('async');
var User = require('../models/User');

var app = require('../app.js');

describe('GET /api/users', function () {
	it('should return 200 OK', function (done) {
		request(app)
			.get('/api/users')
			.expect(200, done);
	});

	it('should return users json', function (done) {

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
			user.save(function (err, msg) {
				if (err) return done(err);
				return done();
			});
		}, function (err) {
			request(app)
				.get('/api/users')
				.end(function (err, res) {
					console.log(res.text);
					return done();
				});
		});
	});
});