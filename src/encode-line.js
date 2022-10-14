const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newString = '';
  let len = str.length;
  let a = 1;
  for (let i = 0; i < len; i++) {
    let lit = str[i];
    if (str[i+1] == lit) {
      a++;
    }
    else {
      if (a == 1) {
        newString = newString + lit;
      }
      else {
        newString = newString + a + lit;
        a = 1;
      }
    }
  }
  return newString
}

module.exports = {
  encodeLine
};
