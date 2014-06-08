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

		// this.Players.localStorage._clear();

		// this.Players.create({
		// 	email: 'nick.chamberlain.jr@gmail.com',
		// 	name: 'Nick Chamberlain',
		// 	playing: true
		// });

		// this.Players.create({
		// 	email: 'nc38998@salisbury.edu',
		// 	name: 'Bob Sacamano',
		// 	playing: false
		// });

		this.Players.fetch();
		console.log(this.Players);

		new this.Views.AppView();
	}
};

$(document).ready(function () {
	'use strict';
	App.init();
});