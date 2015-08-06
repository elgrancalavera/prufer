'use strict'

var randomSequence = require('./random-sequence')
  , tree = require('./tree')

module.exports = randomTree

// n is the number of nodes in the tree,
// then since a Prüfer sequence has n - 2 elements,
// we generate subtract 2 from n.
function randomTree(n) {
  if (n < 3) throw new Error('randomTree requires at least 3 nodes.')
  return tree(randomSequence(n - 2))
}
