var test = require('tap').test
  , prufer = require('../lib/prufer')
  , _ = require('lodash')

test('should return an array', function(t) {
  t.ok(_.isArray(prufer([3,3,3,4])), 'prufer returns an array of edges')
  t.end()
})


