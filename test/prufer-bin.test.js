'use strict'

var testProgram = require('./test-program')
  , prufer = testProgram('../bin/prufer')
  , test = require('tap').test

test('prufer bin', function(t) {

  t.plan(6)

  prufer('random-sequence 10', {}, function(err, code, stdout, stderr) {
    t.notOk(stderr, 'should have no stderr', { todo: true })
  })

  prufer('random-tree 0', {}, function(err, code, stdout, stderr) {
    t.ok(stderr, 'should have stderr', { todo: true })
  })

  prufer('random-tree 1', {}, function(err, code, stdout, stderr) {
    t.ok(stderr, 'should have stderr', { todo: true })
  })

  prufer('random-tree 2', {}, function(err, code, stdout, stderr) {
    t.ok(stderr, 'should have stderr', { todo: true })
  })

  prufer('random-tree 10', {}, function(err, code, stdout, stderr) {
    t.notOk(stderr, 'should have no stderr', { todo: true })
  })

  prufer('tree-from-sequence 3334', {}, function(err, code, stdout, stderr) {
    t.notOk(stderr, 'should have no stderr', { todo: true })
  })

})
