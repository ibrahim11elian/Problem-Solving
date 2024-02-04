// leet code challenge 'Neither Minimum nor Maximum'
// problem link https://leetcode.com/problems/neither-minimum-nor-maximum/description/

/**
 * return any number from the array that is neither the minimum nor the maximum value in the array,
 * or -1 if there is no such number.
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== max && nums[i] !== min) return nums[i];
  }
  return -1;
};
