// leet code challenge 'Jump Game'
// problem link https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (!nums || nums.length === 0) {
    return false;
  }

  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      // If the current index is unreachable, return false
      return false;
    }

    // Update the maximum reachable index
    maxReach = Math.max(maxReach, i + nums[i]);

    // If the maximum reachable index is beyond or at the last index, return true
    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  return false;
};

// Test cases
console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0])); // true
console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
console.log(canJump([2, 0])); // true
console.log(canJump([1, 3, 2])); // true
console.log(canJump([2, 0, 0])); // true
console.log(canJump([2, 5, 0, 0])); // true
console.log(canJump([3, 0, 8, 2, 0, 0, 1])); // true
console.log(canJump([1, 1, 2, 2, 0, 1, 1])); // true
