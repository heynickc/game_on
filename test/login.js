var request = require('supertest');
var passportConf = require('../config/passport');
var util = require('util');
var chai = require('chai');
var should = chai.should();

var app = require('../app.js');
var User = require('../models/User');

describe('GET /login', function () {
	it('should return 200 OK', function (done) {
		request(app)
			.get('/login')
			.expect(200, done);
	});
});

describe('POST /login', function () {

	beforeEach(function () {
		User.remove({}).exec();
	});

	it('successful login redirects to home', function (done) {
		request(app)
			.post('/signup')
			.send({
				email: 'nickc@nickc.com',
				password: 'secretsauce',
				confirmPassword: 'secretsauce'
			})
			.end(function (err, res) {
				if (err) return done(err);
				request(app)
					.post('/login')
					.send({
						email: 'nickc@nickc.com',
						password: 'secretsauce',
					})
					.end(function (err, res) {
						if (err) return done(err);
						res.statusCode.should.equal(302);
						res.headers.should.have.property('location').equal('/');
						return done();
					});
			});
	});

	afterEach(function () {
		User.remove({}).exec();
	});

});