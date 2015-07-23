"use strict";

module.exports = function range(n) {
  return Array.apply(null, Array(n)).map(function(_, i) { return i })
}
