'use strict'
const _ = require('lodash')

// http://mathworld.wolfram.com/PrueferCode.html
// http://hamberg.no/erlend/posts/2010-11-06-prufer-sequence-compact-tree-representation.html
// http://stackoverflow.com/questions/14878228/creating-a-random-tree

module.exports = tree

function tree(a) {
  const t = []
      , T = _.range(0, a.length + 2)
      , deg = T.map(() => 1 )

  a.forEach(n => deg[n] += 1)

  for(let i = 0; i < a.length; i++) {
    for (let j = 0; j < T.length; j++) {
      if (deg[j] === 1) {
        t.push([a[i], T[j]])
        deg[a[i]]--
        deg[T[j]]--
        break
      }
    }
  }

  t.push(T.filter(n => deg[n] === 1))

  return t
}
