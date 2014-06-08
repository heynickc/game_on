/*global App, Backbone*/

App.Models = App.Models || {};

(function () {
	'use strict';

	App.Models.PlayerModel = Backbone.Model.extend({

		idAttribute: '_id',

		initialize: function () {},

		defaults: {
			email: '',
			name: '',
			playing: false
		},

		validate: function (attrs, options) {},

		parse: function (response, options) {
			return response;
		},

		toggle: function () {
			console.log(this.isNew());
			this.save({
				playing: !this.get('playing')
			});
		}
	});

})();