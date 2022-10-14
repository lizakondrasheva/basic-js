const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let a = s2.split('');
  let l = a.length;
  for (let i = 0; i < s1.length; i++) {
    if (a.includes(s1[i])) {
      let c = a.indexOf(s1[i]);
      a.splice(c, 1);
    }
  }
  let l2 = a.length;
  return l - l2
}

module.exports = {
  getCommonCharacterCount
};
