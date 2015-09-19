/* jshint unused:false  */

'use strict'

var testProgram = require('./test-program')
  , path = require('path')
  , prufer = testProgram(reltoabs('../bin/prufer'))
  , test = require('tap').test

test('prufer bin', function(t) {

  t.plan(8)

  prufer('--help', {}, function(err, code, stdout, stderr) {
    console.log('.')
    console.log('.')
    console.log('.')
    console.log('.')
    console.log(stdout)
    console.log('.')
    console.log('.')
    console.log('.')
    console.log('.')
    t.ok(true, 'Should display help message')
  })

  prufer('-h', {}, function(err, code, stdout, stderr) {
    t.ok(true, 'Should display help message')
  })

  prufer('random-tree 0', {}, function(err, code, stdout, stderr) {
    t.ok(stderr, 'should have stderr', {todo: true})
  })

  prufer('random-sequence 10', {}, function(err, code, stdout, stderr) {
    t.notOk(stderr, 'should not have stderr', {todo: true})
  })

  prufer('random-tree 1', {}, function(err, code, stdout, stderr) {
    t.ok(stderr, 'should have stderr', {todo: true})
  })

  prufer('random-tree 2', {}, function(err, code, stdout, stderr) {
    t.ok(stderr, 'should have stderr', {todo: true})
  })

  prufer('random-tree 10', {}, function(err, code, stdout, stderr) {
    t.notOk(stderr, 'should not have stderr', {todo: true})
  })

  prufer('tree-from-sequence 3334', {}, function(err, code, stdout, stderr) {
    t.notOk(stderr, 'should not have stderr', {todo: true})
  })

})

function reltoabs(apath) {
  return path.join(__dirname, apath)
}
