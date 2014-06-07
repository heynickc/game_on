var chai = require('chai');
var should = chai.should();
var mongoose = require('mongoose');
var User = require('../models/User');
var secrets = require('../config/secrets');

// mongoose.connect(secrets.db);
// mongoose.connection.on('error', function () {
// 	console.error('✗ MongoDB Connection Error. Please make sure MongoDB is running.');
// });

describe('User Model', function () {
	it('should create a new user', function (done) {
		var user = new User({
			email: 'test@gmail.com',
			name: 'test',
			password: 'password',
			playing: true
		});
		user.save(function (err) {
			if (err) return done(err);
			done();
		});
	});

	it('should not create a user with the unique email', function (done) {
		var user = new User({
			email: 'test@gmail.com',
			name: 'test',
			password: 'password',
			playing: true
		});
		user.save(function (err) {
			if (err) err.code.should.equal(11000);
			done();
		});
	});

	it('should find user by email', function (done) {
		var user = new User({
			email: 'test@gmail.com',
			name: 'test',
			password: 'password',
			playing: true
		});

		user.save(function (err) {
			if (err) return done(err);
			User.findOne({
				email: 'test@gmail.com'
			}, function (err, user) {
				if (err) return done(err);
				user.email.should.equal('test@gmail.com');
				done();
			});
		});
	});

	it('should delete a user', function (done) {
		User.remove({
			email: 'test@gmail.com'
		}, function (err) {
			if (err) return done(err);
			done();
		});
	});
});