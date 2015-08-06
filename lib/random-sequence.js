'use strict'

var range = require('./simple-range')
  , randint = require('./simple-randint')

module.exports = randomSequence

// n is the number of element in the sequence
function randomSequence(n) {
  if (n < 1) return []
  return range(n).map(function() { return randint(0, n - 1) })
}
