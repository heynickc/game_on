/*global App, Backbone*/

App.Models = App.Models || {};

(function() {
	'use strict';

	App.Models.PlayerModel = Backbone.Model.extend({

		url: '',

		initialize: function() {},

		defaults: {
			name: '',
			playing: false
		},

		validate: function(attrs, options) {},

		parse: function(response, options) {
			return response;
		}
	});

})();