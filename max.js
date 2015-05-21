'use strict'

var cmp = require('./cmp')

module.exports = max

function max(a, b) {
  if(cmp(a, b) > 0) {
    return a
  } else {
    return b
  }
}
