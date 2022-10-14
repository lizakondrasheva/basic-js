const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString();
  let a = [];
  for (let i = 0; i < number.length; i++) {
    let strings = '';
    for (let g = 0; g < number.length; g++) {
      if (g !== i)
      strings = strings + number[g];
    }
    a[i] = +strings;
  }
  return Math.max(...a);
}

module.exports = {
  deleteDigit
};
