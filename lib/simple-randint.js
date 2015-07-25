'use strict'
// Ranges are closed intervals [min, max],
// in opposition to (min, max), [min, max) and (min, max]
module.exports = function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
