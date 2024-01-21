// leet code challenge 'House Robber'
// problem link https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;

  // Initialize two arrays to store the maximum amount of money
  // for scenarios where the current house is robbed or skipped
  const robbed = [nums[0]]; // Maximum amount when the current house is robbed
  const skipped = [0]; // Maximum amount when the current house is skipped

  // Iterate through the houses starting from the second one
  for (let i = 1; i < len; i++) {
    // Calculate the maximum amount when the current house is robbed
    robbed[i] = skipped[i - 1] + nums[i];

    // Calculate the maximum amount when the current house is skipped
    skipped[i] = Math.max(robbed[i - 1], skipped[i - 1]);
  }

  // Return the maximum amount considering the last house
  return Math.max(robbed[len - 1], skipped[len - 1]);
};

console.log(rob([2, 1, 1, 2]));
