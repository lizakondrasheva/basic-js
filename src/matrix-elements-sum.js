const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let s = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let a = 0; a < matrix.length; a++) {
      if (matrix[a - 1] === undefined || matrix[a - 1][i] !== 0) {
        s += matrix[a][i];
      }
    }
  }
  return s;
}

module.exports = {
  getMatrixElementsSum
};
