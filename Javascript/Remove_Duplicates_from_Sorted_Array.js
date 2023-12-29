// leet code challenge 'Apply Transform Over Each Element in Array'
// problem link https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  for (let i = 0, len = arr.length; i < len; i++) arr[i] = fn(arr[i], i);
  return arr;
};
