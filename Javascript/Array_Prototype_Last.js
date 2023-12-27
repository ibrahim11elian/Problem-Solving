// leet code challenge 'Array Prototype Last'
// problem link https://leetcode.com/problems/array-prototype-last/description/

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

const arr = [1, 2, 5];
console.log(arr.last());
