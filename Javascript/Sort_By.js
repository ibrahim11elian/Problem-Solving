// leet code challenge 'Sort By'
// problem link https://leetcode.com/problems/sort-by/description/

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

// sortedArray must be sorted in ascending order by fn output.
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
