var request = require('supertest');
var util = require('util');
var chai = require('chai');
var should = chai.should();
var async = require('async');
var User = require('../models/User');

var app = require('../app.js');

describe('GET /api/users', function () {

	beforeEach(function (done) {
		User.remove({}).exec();
		return done();
	});

	it('should return 200 OK', function (done) {
		request(app)
			.get('/api/users')
			.expect(200, done);
	});

	it('should return users json', function (done) {

		var users = [];

		users[0] = new User({
			email: 'nick.chamberlain.jr@gmail.com',
			password: 'password',
			profile: {
				name: 'Test Dude 1'
			}
		});

		users[1] = new User({
			email: 'nc38998@salisbury.edu',
			password: 'password',
			profile: {
				name: 'Test Dude 2'
			}
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
					JSON.parse(res.text)[0].profile.name.should.equal('Test Dude 1');
					JSON.parse(res.text)[1].profile.name.should.equal('Test Dude 2');
					return done();
				});
		});
	});

	afterEach(function (done) {
		User.remove({}).exec();
		return done();
	});
});

describe('GET /api/users', function () {

	beforeEach(function (done) {
		User.remove({}).exec();
		return done();
	});

	afterEach(function (done) {
		User.remove({}).exec();
		return done();
	});
});