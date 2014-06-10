/*global App, Backbone*/

App.Collections = App.Collections || {};

(function () {
	'use strict';

	App.Collections.PlayerCollection = Backbone.Collection.extend({

		url: 'http://localhost:3000/api/users',

		model: App.Models.PlayerModel

	});

	App.Collections.PlayerCollectionLocalStorage = Backbone.Collection.extend({

		localStorage: new Backbone.LocalStorage('players'),

		model: App.Models.PlayerModel

	});

})();