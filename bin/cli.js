'use strict';

var nopt = require('nopt')
  , knownOpts = {
      'help': Boolean
    , 'debug': Boolean
    }
  , shortHands =  {
      'h': ['--help']
    }
  , options = nopt(knownOpts, shortHands, process.argv, 2)
  , remain = options.argv.remain

options.command = remain[0]
options.input = remain[1]
module.exports = options
