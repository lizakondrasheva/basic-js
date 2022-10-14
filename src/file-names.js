const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  if (names.length > 0) {
    const object = {};
    const arg = [];
    arg.push(names[0]);
    const arr = [...new Set(names)];
    arr.forEach((item) => (object[item] = 0));
    for (let i = 1; i < names.length; i += 1) {
      if (!arg.includes(names[i])) {
        arg.push(names[i]);
      } else {
        object[names[i]] += 1;
        arg.push(`${names[i]}(${object[names[i]]})`);
      }
    }
    return arg;
  }
  return []
}

module.exports = {
  renameFiles
};
