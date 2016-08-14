'use strict'

const _ = require('lodash')
    , randint = require('./simple-randint')

module.exports = randomSequence

// n is the number of elements in the sequence
function randomSequence(n) {
  if (n < 1) return []
  return _.range(0, n).map(() => randint(0, n - 1))
}
