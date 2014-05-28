var moment = require('moment');
var sinon = require('sinon');
var chai = require('chai');
var should = chai.should();

describe('Moment manipulations', function() {

	it('should instantiate moment of 05/27/14', function() {
		var date = moment('05-27-2014', 'MM-DD-YYYY');
		date.format('MM-DD-YYYY').should.equal('05-27-2014');
	});

	it('should figure out what next Wednesdays date is', function() {
		var date = moment('05-27-2014', 'MM-DD-YYYY');
		var nextWednesday = date.day(10);
		nextWednesday.format('MM-DD-YYYY').should.equal('06-04-2014');
	});
});