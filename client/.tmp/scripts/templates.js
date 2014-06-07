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
__p += '<div class="list-group-item">\n  <div class="col-xs-6">\n    <h4 class="username">' +
((__t = ( name )) == null ? '' : __t) +
'</h4>\n  </div>\n  <div class="col-xs-6">\n    <div class="pull-right">\n      <button type="button" data-toggle="button" class="btn btn-default btn-circle btn-lg">\n        <i class="fa fa-thumbs-o-up fa-lg"></i>\n      </button>\n      <button type="button" data-toggle="button" class="btn btn-default btn-circle btn-lg">\n        <i class="fa fa-thumbs-o-down fa-lg"></i>\n      </button>\n    </div>\n  </div>\n  <div class="clearfix"></div>\n</div>\n';

}
return __p
};