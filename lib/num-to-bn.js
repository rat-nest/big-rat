'use strict'

var BN = require('bn.js')
var db = require('double-bits')

module.exports = num2bn

function num2bn(x) {
  var e = db.exponent(x)
  x *= Math.pow(2, 52-e)
  if(e < 52) {
    return (new BN(x)).shrn(52-e)
  } else {
    return (new BN(x)).shln(e-52)
  }
}
