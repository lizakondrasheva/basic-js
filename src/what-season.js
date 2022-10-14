const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw Error('Invalid date!');
  }

  if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!');
  }

  let i = date.getMonth();
  if (i == 0) {
    return "winter";
  }
  if (i == 1) {
    return "winter";
  }
  if (i == 2) {
    return "spring";
  }
  if (i == 3) {
    return "spring";
  }
  if (i == 4) {
    return "spring";
  }
  if (i == 5) {
    return "summer";
  }
  if (i == 6) {
    return "summer";
  }
  if (i == 7) {
    return "summer";
  }
  if (i == 8) {
    return "autumn";
  }
  if (i == 9) {
    return "autumn";
  }
  if (i == 10) {
    return "autumn";
  }
  if (i == 11) {
    return "winter";
  }
}

module.exports = {
  getSeason
};
