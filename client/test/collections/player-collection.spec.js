/*global beforeEach, afterEach, describe, it, assert, expect  */
'use strict';

describe('Players Collection', function () {

	beforeEach(function () {
		this.server = sinon.fakeServer.create();
		this.server.autoRespond = true;
		this.Players = new App.Collections.PlayerCollection();
		this.Players.localStorage._clear();
	});

	it('Create posts new model to the server', function () {
		this.Players.create({
			name: 'Nick Chamberlain',
			email: 'nick.chamberlain.jr@gmail.com',
			playing: true
		});

		expect(this.Players.at(0).get('email')).to.equal('nick.chamberlain.jr@gmail.com');
		expect(this.Players.at(0).get('name')).to.equal('Nick Chamberlain');
		expect(this.Players.at(0).get('playing')).to.be.true;
		console.log(this.Players.at(0).toJSON());
	});

	it('Updating a model PUTs change to server', function () {
		this.Players.create({
			name: 'Nick Chamberlain',
			email: 'nick.chamberlain.jr@gmail.com',
			playing: true
		});
		this.Players.create({
			name: 'Bob Sacamano',
			email: 'nc38998@salisbury.edu',
			playing: false
		});

		var player2 = this.Players.get(this.Players.at(1).id);

		expect(this.Players.at(1).get('playing')).to.be.false;

		player2.set('playing', true);

		player2.save();

		this.Players.fetch();

		expect(this.Players.at(1).get('playing')).to.be.true;
	});

	it('Should write appropriate JSON to the server', function () {
		this.Players.create({
			name: 'Nick Chamberlain',
			email: 'nick.chamberlain.jr@gmail.com',
			playing: true
		});
		this.Players.create({
			name: 'Bob Sacamano',
			email: 'nc38998@salisbury.edu',
			playing: false
		});
		var request = this.server.requests[0].requestBody;
		console.log(request);
	});

	afterEach(function () {
		this.Players.localStorage._clear();
	});
});