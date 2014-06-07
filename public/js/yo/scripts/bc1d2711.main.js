window.App={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";console.log("Hello from Backbone!"),this.collection=new this.Collections.PlayerCollection,this.collection.create({email:"nick.chamberlain.jr@gmail.com",name:"Nick Chamberlain",playing:!0}),this.collection.create({email:"nc38998@salisbury.edu",name:"Bob Sacamano",playing:!0}),new this.Views.AppView}},$(document).ready(function(){"use strict";App.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/app-view.ejs"]=function(obj){obj||(obj={});{var __p="";_.escape}with(obj)__p+="";return __p},this.JST["app/scripts/templates/player-view.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<div class="list-group-item">\n  <div class="col-xs-6">\n    <h4 class="username">'+(null==(__t=name)?"":__t)+'</h4>\n  </div>\n  <div class="col-xs-6">\n    <div class="pull-right">\n      <button type="button" data-toggle="button" class="btn btn-default btn-circle btn-lg">\n        <i class="fa fa-thumbs-o-up fa-lg"></i>\n      </button>\n      <button type="button" data-toggle="button" class="btn btn-default btn-circle btn-lg">\n        <i class="fa fa-thumbs-o-down fa-lg"></i>\n      </button>\n    </div>\n  </div>\n  <div class="clearfix"></div>\n</div>\n';return __p},App.Models=App.Models||{},function(){"use strict";App.Models.PlayerModel=Backbone.Model.extend({initialize:function(){},defaults:{email:"",name:"",playing:!1},validate:function(){},parse:function(a){return a}})}(),App.Collections=App.Collections||{},function(){"use strict";App.Collections.PlayerCollection=Backbone.Collection.extend({url:"http://localhost:3000/api/users",model:App.Models.PlayerModel})}(),App.Views=App.Views||{},function(){"use strict";App.Views.PlayerView=Backbone.View.extend({template:JST["app/scripts/templates/player-view.ejs"],tagName:"div",id:"",className:"list-group-item",events:{},initialize:function(){this.listenTo(this.model,"change",this.render)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}})}(),App.Views=App.Views||{},function(){"use strict";App.Views.AppView=Backbone.View.extend({el:"#app-view",template:JST["app/scripts/templates/app-view.ejs"],tagName:"div",id:"",className:"",events:{},initialize:function(){this.showAllPlayers()},showPlayer:function(a){var b=new App.Views.PlayerView({model:a});a.get("playing")&&$("#player-list").append(b.render().el)},showAllPlayers:function(){App.collection.each(this.showPlayer,this)}})}();