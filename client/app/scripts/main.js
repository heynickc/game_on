/*global App, $*/


window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	init: function () {
		'use strict';
		console.log('Hello from Backbone!');

		this.collection = new this.Collections.PlayerCollectionLocalStorage();

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

		new this.Views.AppView({
			collection: this.collection
		});
	}
};

$(document).ready(function () {
	'use strict';
	// App.init();
});