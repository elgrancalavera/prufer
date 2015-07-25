'use strict'

var randomPruferSequence = require('./random-prufer-sequence')
  , treeFromPrufer = require('./tree-from-prufer')

module.exports = randomTree

function randomTree(n) {
  return treeFromPrufer(randomPruferSequence(n))
}
