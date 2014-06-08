/*global App, Backbone, JST*/

App.Views = App.Views || {};

(function () {
	'use strict';

	App.Views.PlayerView = Backbone.View.extend({

		template: JST['app/scripts/templates/player-view.ejs'],

		tagName: 'div',

		id: '',

		className: 'list-group-item',

		events: {
			'click #player-status button': 'togglePlaying',
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);

			//not sure I need this
			this.$el.toggleClass('playing', this.model.get('playing'));
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));

			// if the player is playing, give it the playing class
			this.$el.toggleClass('playing', this.model.get('playing'));
			return this;
		},

		togglePlaying: function () {
			this.model.toggle();
		},

	});

})();