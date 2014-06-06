/*global App, $*/


window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function () {
		'use strict';
		console.log('Hello from Backbone!');

		this.collection = new this.Collections.PlayerCollection();

		this.collection.localStorage._clear();

		this.collection.create({
			email: 'nick.chamberlain.jr@gmail.com',
			name: 'Nick Chamberlain',
			playing: true
		});

		this.collection.create({
			email: 'nc38998@salisbury.edu',
			name: 'Bob Sacamano',
			playing: true
		});

		new this.Views.AppView();
	}
};

$(document).ready(function () {
	'use strict';
	App.init();
});