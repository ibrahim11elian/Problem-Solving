// leet code challenge 'Array Reduce Transformation'
// problem link https://leetcode.com/problems/array-reduce-transformation/description/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (!nums.length) {
    return init;
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};
