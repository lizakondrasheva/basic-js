const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
  function repeater(str, options) {
  const defaultOptions = {
    repeatTimes: 1,
    separator: "+",
    additionSeparator: "|",
    addition: "",
    additionRepeatTimes: 1,
  };
  let rst = "";
  for (let key in options) {
    defaultOptions[key] = options[key];
  }

  for (let i = 0; i < defaultOptions.repeatTimes; i += 1) {
    rst += str;
    if (defaultOptions.additionRepeatTimes === 1) {
      for (let a = 0; a < defaultOptions.additionRepeatTimes; a += 1) {
        rst += defaultOptions.addition;
      }
    } else {
      for (let a = 0; a < defaultOptions.additionRepeatTimes; a += 1) {
        rst += defaultOptions.addition + defaultOptions.additionSeparator;
      }
      rst = rst.slice(0, -defaultOptions.additionSeparator.length);
    }
    rst += defaultOptions.separator;
  }
  return rst.slice(0, -defaultOptions.separator.length);
}

module.exports = {
  repeater,
};

module.exports = {
  repeater
};
