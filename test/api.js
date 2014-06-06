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
					if (err) return done(err);
					res.body[0].profile.name.should.equal('Test Dude 1');
					res.body[1].profile.name.should.equal('Test Dude 2');
					return done();
				});
		});
	});

	afterEach(function (done) {
		User.remove({}).exec();
		return done();
	});
});

describe('PUT /api/users', function () {

	beforeEach(function (done) {
		User.remove({}).exec();
		return done();
	});

	it('PUT should update player status', function (done) {


		var users = [];

		users[0] = new User({
			email: 'nick.chamberlain.jr@gmail.com',
			password: 'password',
			playing: false,
			profile: {
				name: 'Test Dude 1'
			}
		});

		users[1] = new User({
			email: 'nc38998@salisbury.edu',
			password: 'password',
			playing: true,
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
				.put('/api/users/nick.chamberlain.jr@gmail.com')
				.send({
					playing: true
				})
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					res.body.playing.should.be.true;
					return done();
				});
		});

		afterEach(function (done) {
			User.remove({}).exec();
			return done();
		});
	});
});