// leet code challenge 'Minimum Increment to Make Array Unique'
// problem link https://leetcode.com/problems/minimum-increment-to-make-array-unique/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  let i = 1;
  while (i < nums.length) {
    if (nums[i - 1] >= nums[i]) {
      res += 1 + (nums[i - 1] - nums[i]);
      nums[i] = nums[i - 1] + 1;
    }
    i++;
  }

  return res;
};
