/*global beforeEach, before, afterEach, after, describe, it, assert, expect  */
'use strict';

describe('PlayerView View', function () {

	before(function () {
		// Create test fixture.
		this.$fixture = $('<div id="player-list-fixture"></div>');
	});

	beforeEach(function () {
		// Empty out and rebind the fixture for each run.
		this.$fixture.empty().appendTo($('#fixtures'));

		this.Players = new App.Collections.PlayerCollection();

		this.Players.create({
			email: 'nick.chamberlain.jr@gmail.com',
			name: 'Nick Chamberlain',
			playing: false
		});

		this.view = new App.Views.PlayerView({
			el: this.$fixture,
			model: this.Players.at(0)
		});

		// this gets called by Views.AppView
		this.view.render().el;
	});

	it('Should create a player view with model : .name', function () {
		var $name = $('h4#username');
		$name.text().should.equal('Nick Chamberlain');
	});

	it('Toggle player playing updates model attribute', function () {
		this.view.model.get('playing').should.be.false;
		this.view.togglePlaying();
		this.view.model.get('playing').should.be.true;
	});

	it('Toggle player playing updates model attribute', function () {
		this.view.model.get('playing').should.be.false;
		this.view.togglePlaying();
		this.view.model.get('playing').should.be.true;
	});

	afterEach(function () {
		// Destroying the model also destroys the view.
		this.view.model.destroy();
	});

	after(function () {
		// Remove all subfixtures after test suite finishes.
		$('#fixtures').empty();
	});
});