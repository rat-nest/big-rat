'use strict'

var cmp = require('./cmp')

module.exports = min

function min(a, b) {
  if(cmp(a, b) < 0) {
    return a
  } else {
    return b
  }
}
