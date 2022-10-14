const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  a: [],
  chains: '',
  getLength() {
    return this.a.length;
  },
  addLink(value) {
    if (
      value ||
      value === null ||
      value === 0 ||
      Number.isNaN(value) ||
      value === false
    ) {
      this.a.push(String(value));
    } else {
      this.a.push(' ');
    }
    return this;

  },
  removeLink(position) {
    if (position && Number.isInteger(position) && this.a[position - 1]) {
      this.a.splice(position - 1, 1);
    } else {
      this.a = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    return this;
  },
  reverseChain() {
    this.a.reverse();
    return this;
  },
  finishChain() {
    this.chains = this.a.map((item) => `( ${item} )`).join('~~');
    this.a = [];
    return this.chains;
  }
};

module.exports = {
  chainMaker
};
