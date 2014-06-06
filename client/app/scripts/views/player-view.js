/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
	'use strict';

	App.Views.PlayerView = Backbone.View.extend({

		template: JST['app/scripts/templates/player-view.ejs'],

		tagName: 'li',

		id: '',

		className: 'list-group-item',

		events: {},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

})();