'use strict';

var mustache = require('mustache');

exports.name = 'mustache';
exports.outputFormat = 'xml';
exports.render = function (str, options, locals) {
  return mustache.render(str, locals);
}
