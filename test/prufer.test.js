'use strict'

const _ = require('lodash')
    , test = require('tap').test
    , prufer = require('../lib')

test('Genrating trees from Prüfer codes', (t) => {
  const expected = [[3, 0], [3,1], [3, 2], [4, 3], [4, 5]]
      , tree = prufer.tree([3, 3, 3, 4])

  t.same(tree, expected, 'Should return the expected tree.')
  t.end()
})

test('Genrating random Prüfer codes', (t) => {
  t.equal(
      prufer.randomCode(10).length
    , 10
    , 'Should return a sequence  with the requested number of items'
    )
  t.end()
})

test('Generating random trees by node count', (t) => {

  t.throws(() => prufer.randomTree(0), 'Should throw for less than 3 nodes')
  t.throws(() => prufer.randomTree(1), 'Should throw for less than 3 nodes')
  t.throws(() => prufer.randomTree(2), 'Should throw for less than 3 nodes')

  t.equal(
      countNodes(prufer.randomTree(3))
    , 3
    , 'Should have the requested node count'
    )

  t.equal(
      countNodes(prufer.randomTree(10))
    , 10
    , 'Should have the requested node count'
    )

  t.end()
})

function countNodes(tree) {
  return _.chain(tree).flatten().uniq().value().length
}
