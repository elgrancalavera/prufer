'use strict'

const _ = require('lodash')
    , test = require('tap').test
    , treeFromPrufer = require('../lib/tree')
    , randint = require('../lib/simple-randint')
    , randomTree = require('../lib/random-tree')
    , randomPruferSequence = require('../lib/random-sequence')

test('randint constrained to just 0', function(t) {
  var cases = _.range(0, 5)
    , expected = cases.map(_.constant(0))
    , results = cases.map(rand(0, 0))

  t.same(expected, results, 'Should always be 0')
  t.end()
})

test('randint constrained to 1', function(t) {
  var cases = _.range(0, 5)
    , expected = cases.map(_.constant(1))
    , results = cases.map(rand(1, 1))

  t.same(expected, results, 'Should always be 1')
  t.end()
})

test('randint within range', function(t) {
  var min = 0
    , max = 10
    , cases = _.range(0, 1000)
    , expected = cases.map(_.constant(true))
    , results = cases.map(rand(min, max)).map(isBetween(min, max))

  t.same(expected, results, 'Should always be between ' + min + ' and ' + max)
  t.end()
})

test('Genrating trees from Prüfer sequences', function(t) {
  var prufer = [3, 3, 3, 4]
    , expected = [ [ 3, 0 ], [ 3, 1 ], [ 3, 2 ], [ 4, 3 ], [ 4, 5 ] ]
    , tree = treeFromPrufer(prufer)

  t.same(tree, expected, 'Should return the expected tree.')
  t.end()
})

test('Genrating random Prüfer sequences', function(t) {
  t.equal(
      randomPruferSequence(10).length
    , 10
    , 'Should return a sequence  with the requested number of items'
    )
  t.end()
})

test('Generating random trees by node count', function(t) {

  t.throws(randomTreeLater(0), 'Should throw for less than 3 nodes')
  t.throws(randomTreeLater(1), 'Should throw for less than 3 nodes')
  t.throws(randomTreeLater(2), 'Should throw for less than 3 nodes')

  t.equal(
      countNodes(randomTree(3))
    , 3
    , 'Should have the requested node count'
    )

  t.equal(
      countNodes(randomTree(10))
    , 10
    , 'Should have the requested node count'
    )

  t.end()

  function randomTreeLater(n) {
    return function() {
      randomTree(n)
    }
  }

})

function isBetween(min, max) {
  return _.partial(_.inRange, _, min, max + 1)
}

function rand(min, max) {
  return function() { return randint(min, max) }
}

function countNodes(tree) {
  return _.chain(tree).flatten().uniq().value().length
}
