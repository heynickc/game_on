/*global App, $*/


window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function () {
		'use strict';
		console.log('Hello from Backbone!');

		this.Players = new this.Collections.PlayerCollection();
		this.Players.reset();

		new this.Views.AppView();

		this.Players.create({
			email: 'nick.chamberlain.jr@gmail.com',
			name: 'Nick Chamberlain',
			playing: true
		});

		this.Players.create({
			email: 'nc38998@salisbury.edu',
			name: 'Bob Sacamano',
			playing: false
		});
	}
};

$(document).ready(function () {
	'use strict';
	App.init();
});