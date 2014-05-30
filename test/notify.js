var request = require('supertest');
var util = require('util');
var chai = require('chai');
var should = chai.should();
var cheerio = require('cheerio');
var async = require('async');

var app = require('../app.js');
var User = require('../models/User');

describe('POST /testNotify', function() {

	beforeEach(function() {
		User.remove({}).exec();
	});

	it('duplicate user redirects to signup', function(done) {

		var user1 = new User({
			email: 'nick.chamberlain.jr@gmail.com',
			name: 'test',
			password: 'password'
		});

		var user2 = new User({
			email: 'nc38998@salisbury.edu',
			name: 'test',
			password: 'password'
		});

		user1.save(function(err) {
			if (err) return done(err);
		});

		user2.save(function(err) {
			if (err) return done(err);
			// post notification button
			request(app)
				.post('/testNotify')
				.end(function(err, res) {
					if (err) return done(err);
					return done();
				});
		});
	});

	afterEach(function() {
		User.remove({}).exec();
	});
});