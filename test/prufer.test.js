"use strict";

var test = require('tap').test
  , prufer = require('../lib/prufer')

test('should return an array', function(t) {
  t.ok(Array.isArray(prufer([3,3,3,4])), 'prufer returns an array of edges')
  t.same(
    prufer([3,3,3,4])
  , [ [ 3, 0 ], [ 3, 1 ], [ 3, 2 ], [ 4, 3 ], [ 4, 5 ] ]
  , 'returns same array'
  )
  t.end()
})


