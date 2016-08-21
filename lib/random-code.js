'use strict'

const _ = require('lodash')
    , randint = require('random-int')

module.exports = randomCode

// n is the number of elements in the sequence
function randomCode(n) {
  if (n < 1) return []
  return _.range(0, n).map(() => randint(n - 1))
}
