

const testProgram = require('@grancalavera/test-program')
    , path = require('path')
    , bin = path.resolve(__dirname, '../bin/prufer')
    , prufer = testProgram(bin)
    , test = require('tap').test

test('prufer bin', t => {

  t.plan(11)

  prufer('--help', {}, function(err, code, stdout, stderr) {
    t.match(stdout, /Usage\: prufer/, 'Should display help message')
  })

  prufer('-h', {}, (err, code, stdout, stderr) => {
    t.match(stdout, /Usage\: prufer/, 'Should display help message')
  })

  prufer(['foo'], {}, (err, code, stdout, stderr) => {
    t.match(
      stderr
    , /^Unknown command "foo"/
    , 'Should fail with unknown commands'
    )
  })

  prufer(['random-tree', '0'], {}, (err, code, stdout, stderr) => {
    t.match(
      stderr
    , /^randomTree requires at least 3 nodes/
    , 'must require at least 3 nodes'
    )
  })

  prufer(['random-tree', '1'], {}, (err, code, stdout, stderr) => {
    t.match(
      stderr
    , /^randomTree requires at least 3 nodes/
    , 'must require at least 3 nodes'
    )
  })

  prufer(['random-tree', '2'], {}, (err, code, stdout, stderr) => {
    t.match(
      stderr
    , /^randomTree requires at least 3 nodes/
    , 'must require at least 3 nodes'
    )
  })

  prufer(['random-tree', '3'], {}, (err, code, stdout, stderr) => {
    const tree = JSON.parse(stdout)
    t.ok(Array.isArray(tree), 'should return a tree')
  })

  prufer(['random-code', '0'], {}, (err, code, stdout, stderr) => {
    const seq = JSON.parse(stdout)
    t.same(seq, [], 'should produce an empty code')
  })

  prufer(['random-code', '10'], {}, (err, code, stdout, stderr) => {
    const seq = JSON.parse(stdout)
    t.same(seq.length, 10, 'should pruduce a code with known length')
  })

  prufer(['tree', '[3,3,3,4]'], {}, (err, code, stdout, stderr) => {
    const expected = [[3, 0], [3,1], [3, 2], [4, 3], [4, 5]]
        , actual = JSON.parse(stdout)
    t.same(actual, expected, 'should produce a known tree')
  })

  prufer(['tree', '[ 3 ,3  ,3  ,4   ]'], {}, (err, code, stdout, stderr) => {
    const expected = [[3, 0], [3,1], [3, 2], [4, 3], [4, 5]]
        , actual = JSON.parse(stdout)
    t.same(actual, expected, 'whitespace should not matter')
  })
})
