// http://mathworld.wolfram.com/PrueferCode.html
// http://hamberg.no/erlend/posts/2010-11-06-prufer-sequence-compact-tree-representation.html
// http://stackoverflow.com/questions/14878228/creating-a-random-tree

"use strict";

var range = require('./simple-range')

module.exports = prufer

function prufer(a) {
  var t = []
    , T = range(a.length + 2)
    , deg = T.map(function() { return 1 })
    , i
    , j

  a.forEach(function(i) { deg[i] += 1 })

  for(i = 0; i < a.length; i++) {
    for (j = 0; j < T.length; j++) {
      if (deg[j] == 1) {
        t.push([a[i], T[j]])
        deg[a[i]]--
        deg[T[j]]--
        break
      }
    }
  }

  t.push(T.filter(function(i) { return deg[i] === 1 }))

  return t
}
