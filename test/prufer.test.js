'use strict'

var _ = require('lodash')
  , test = require('tap').test
  , mockery = require('mockery')
  , treeFromPrufer = require('../lib/tree-from-prufer')
  , range = require('../lib/simple-range')
  , randint = require('../lib/simple-randint')
  , randomTree = require('../lib/random-tree')

test('Arrays of integer sequences', function(t) {
  var expected = [0, 1, 2, 3, 4]

  t.same(range(5), expected, 'Should return the same array.')
  t.end()
})

test('randint constrained to just 0', function(t) {
  var cases = range(5)
    , expected = cases.map(_.constant(0))
    , results = cases.map(rand(0, 0))

  t.same(expected, results, 'Should always be 0')
  t.end()
})

test('randint constrained to 1', function(t) {
  var cases = range(5)
    , expected = cases.map(_.constant(1))
    , results = cases.map(rand(1, 1))

  t.same(expected, results, 'Should always be 1')
  t.end()
})

test('randint within range', function(t) {
  var min = 0
    , max = 10
    , cases = range(1000)
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
  var randomPruferSequence
    , mocks = [
      {
        module:'./randint-producer'
      , mock: naiveIntProducer
      }
    ]

  beginMocking(mocks)
  randomPruferSequence = require('../lib/random-prufer-sequence')

  t.throws(tooShort, 'Should throw for trees with less than 2 nodes')
  t.same(
    randomPruferSequence(10)
  , range(8)
  , 'Should return a sequence 2 elements smaller ' +
    'than the requested number of nodes'
  )

  t.tearDown(function() {
    endMocking(mocks)
  })
  t.end()

  function tooShort() {
    return randomPruferSequence(1)
  }
})

test('Generating random trees by node count', function(t) {
  var count = 10
    , tree = randomTree(count)
  t.equal(countNodes(tree), count, 'Should have the requested node count')
  t.end()
})

function isBetween(min, max) {
  return _.partial(_.inRange, _, min, max + 1)
}

function rand(min, max) {
  return function() { return randint(min, max) }
}

function naiveIntProducer() {
  return function(i) { return i }
}

function beginMocking(mocks) {
  mocks.forEach(registerMock)
  mockery.enable(
    {
      useCleanCache: true
    , arnOnReplace: false
    , warnOnUnregistered: false
    }
  )
}

function endMocking(mocks) {
  mocks.forEach(deregisterMock)
  mockery.disable()
}

function registerMock(mock) {
  mockery.registerMock(mock.module, mock.mock)
}

function deregisterMock(mock) {
  mockery.deregisterMock(mock.module)
}

function countNodes(tree) {
  return _.chain(tree).flatten().uniq().value().length
}
