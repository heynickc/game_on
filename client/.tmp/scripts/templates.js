this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/app-view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["app/scripts/templates/player-view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-6" id="player">\n  <h4 id="username">' +
((__t = ( name )) == null ? '' : __t) +
'</h4>\n</div>\n<div class="col-xs-6" id="player-status">\n  <div class="pull-right">\n    <button type="button" data-toggle="button" class="btn btn-default btn-circle btn-lg ' +
((__t = ( playing ? 'active' : '' )) == null ? '' : __t) +
'">\n      <i class="fa fa-thumbs-o-up fa-lg"></i>\n    </button>\n  </div>\n</div>\n<div class="clearfix"></div>';

}
return __p
};