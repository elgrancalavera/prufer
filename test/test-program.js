

var _ = require('lodash')
  , spawn = require('child_process').spawn

module.exports = testProgram

function testProgram(bin) {
  return function program(cmd, opts, cb) {
    cb = _.once(cb)
    cmd = [bin].concat(cmd)
    opts = opts || {}

    var stdout = ''
      , stderr = ''
      , node = process.execPath
      , child = spawn(node, cmd, opts)

    if (child.stderr) {
      child.stderr.on('data', function(chunk) {
        stderr += chunk
      })
    }

    if (child.stdout) {
      child.stdout.on('data', function(chunk) {
        stdout += chunk
      })
    }

    child.on('error', cb)

    child.on('close', function(code) {
      cb(null, code, stdout, stderr)
    })

    return child
  }
}
