'use strict'

var mustache = require('mustache')

exports.name = 'mustache'
exports.outputFormat = 'html'

exports.compile = function (str, options) {
  mustache.parse(str, options.tags || null)
  return function (locals) {
    return mustache.render(str, locals)
  }
}
