/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
	'use strict';

	App.Views.AppView = Backbone.View.extend({

		el: '#app-view',

		template: JST['app/scripts/templates/app-view.ejs'],

		tagName: 'div',

		id: '',

		className: '',

		events: {},

		initialize: function () {
			this.showAllPlayers();
		},

		showPlayer: function (model) {
			var view = new App.Views.PlayerView({
				model: model
			});

			if (model.get('playing')) {
				$('#player-list').append(view.render().el);
			}
		},

		showAllPlayers: function () {
			App.collection.each(this.showPlayer, this);
		}

	});
})();