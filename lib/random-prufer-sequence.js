'use strict'

var range = require('./simple-range')
  , randintProducer = require('./randint-producer')

module.exports = randomPruferSequence

function randomPruferSequence(n) {
  if (n < 2) throw new Error('A tree should have at least 2 nodes')
  return range(n - 2).map(randintProducer(0, n - 1))
}
