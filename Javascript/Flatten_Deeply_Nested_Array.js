// leet code challenge 'Flatten Deeply Nested Array'
// problem link https://leetcode.com/problems/flatten-deeply-nested-array/description/

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  const res = [];

  function helper(arr, depth) {
    for (const e of arr) {
      if (Array.isArray(e) && depth < n) {
        helper(e, depth + 1);
      } else {
        res.push(e);
      }
    }
    return res;
  }
  return helper(arr, 0);
};
