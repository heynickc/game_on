/*global beforeEach, afterEach, describe, it, assert, expect  */
'use strict';

describe('Players Collection', function () {

	beforeEach(function () {
		this.PlayerCollection = new App.Collections.PlayerCollection();
		this.PlayerCollection.localStorage._clear();
	});

	it('Create posts new model to the server', function () {
		this.PlayerCollection.create({
			name: 'Nick Chamberlain',
			email: 'nick.chamberlain.jr@gmail.com',
			playing: true
		});

		expect(this.PlayerCollection.at(0).get('email')).to.equal('nick.chamberlain.jr@gmail.com');
		expect(this.PlayerCollection.at(0).get('name')).to.equal('Nick Chamberlain');
		expect(this.PlayerCollection.at(0).get('playing')).to.be.true;
		console.log(this.PlayerCollection.at(0).toJSON());
	});

	it('Updating a model PUTs change to server', function () {
		this.PlayerCollection.create({
			name: 'Nick Chamberlain',
			email: 'nick.chamberlain.jr@gmail.com',
			playing: true
		});
		this.PlayerCollection.create({
			name: 'Bob Sacamano',
			email: 'nc38998@salisbury.edu',
			playing: false
		});

		var player2 = this.PlayerCollection.get(this.PlayerCollection.at(1).id);

		expect(this.PlayerCollection.at(1).get('playing')).to.be.false;

		player2.set('playing', true);

		player2.save();

		this.PlayerCollection.fetch();

		expect(this.PlayerCollection.at(1).get('playing')).to.be.true;
	});

	afterEach(function () {
		this.PlayerCollection.localStorage._clear();
	});
});