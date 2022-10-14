const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let number = email.indexOf('@');
  let arr =  email.slice(number+1);
  if (arr.includes('@')) {
    return getEmailDomain(arr)
  }
  else {
    return arr
  }
}

module.exports = {
  getEmailDomain
};
