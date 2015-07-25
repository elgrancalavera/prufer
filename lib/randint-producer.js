'use strict'

var randint = require('./simple-randint')

module.exports = randomProducer

function randomProducer(min, max) {
  return function() { return randint(min, max) }
}
