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
__p += '<div class="col-xs-6" id="player">\r\n  <h4 id="username">' +
((__t = ( name )) == null ? '' : __t) +
'</h4>\r\n</div>\r\n<div class="col-xs-6" id="player-status">\r\n  <div class="pull-right">\r\n    <button type="button" data-toggle="button" class="btn btn-default btn-circle btn-lg ' +
((__t = ( playing ? 'active' : '' )) == null ? '' : __t) +
'">\r\n      <i class="fa fa-thumbs-o-up fa-lg"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class="clearfix"></div>';

}
return __p
};