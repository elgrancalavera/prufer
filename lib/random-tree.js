'use strict'

var randomCode = require('./random-code')
  , tree = require('./tree')

module.exports = randomTree

// n is the number of nodes in the tree,
// then since a Prüfer sequence has n - 2 elements,
// we subtract 2 from n.
function randomTree(n) {
  if (n < 3) throw new Error('randomTree requires at least 3 nodes.')
  return tree(randomCode(n - 2))
}
