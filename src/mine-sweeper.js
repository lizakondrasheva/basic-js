const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const news = [];
  let c = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let g = 0; g < matrix[i].length; g += 1) {
      if (matrix[i - 1] && matrix[i - 1][g - 1]) {
        c += 1;
      }
      if (matrix[i - 1] && matrix[i - 1][g]) {
        c += 1;
      }
      if (matrix[i - 1] && matrix[i - 1][g + 1]) {
        c += 1;
      }
      if (matrix[i][g - 1]) {
        c += 1;
      }
      if (matrix[i][g + 1]) {
        c += 1;
      }
      if (matrix[i + 1] && matrix[i + 1][g - 1]) {
        c += 1;
      }
      if (matrix[i + 1] && matrix[i + 1][g]) {
        c += 1;
      }
      if (matrix[i + 1] && matrix[i + 1][g + 1]) {
        c += 1;
      }
      news.push(c);
      c = 0;
    }
  }

  const result = [];
  for (let i = 0; i < news.length; i += matrix[0].length)
  result.push(news.slice(i, i + matrix[0].length));

  return result;
}

module.exports = {
  minesweeper
};
