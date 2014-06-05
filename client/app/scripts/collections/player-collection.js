/*global App, Backbone*/

App.Collections = App.Collections || {};

(function() {
	'use strict';

	App.Collections.PlayerCollection = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage('players'),

		model: App.Models.PlayerModel

	});


})();