'use strict'

var randomPruferSequence = require('./random-prufer-sequence')
  , treeFromPrufer = require('./tree-from-prufer')

module.exports = randomTree

// n is the number of nodes in the tree,
// then since a Prüfer sequence has n - 2 elements,
// we generate subtract 2 from n.
function randomTree(n) {
  if (n < 3) throw new Error('randomTree requires at least 3 nodes.')
  return treeFromPrufer(randomPruferSequence(n - 2))
}
