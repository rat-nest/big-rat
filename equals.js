'use strict'

var cmp = require('./cmp')

module.exports = equals

function equals(a, b) {
  return a.cmp(b) === 0
}
