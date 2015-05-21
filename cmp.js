'use strict'

module.exports = cmp

function cmp(a, b) {
  return a[0].mul(b[1]).cmp(a[1].mul(b[0]))
}
