const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  function countTurns(number) {
    
    if (number == 1) {
      return 1;
    }
    else {
      return 1 + 2 * countTurns(number - 1);
    }
  }

  let i = {}
  i.turns = countTurns(disksNumber);
  i.seconds = Math.floor(i.turns * 3600 / turnsSpeed);
  return i;
}
module.exports = {
  calculateHanoi
};
