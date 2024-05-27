// leet code challenge 'Special Array With X Elements Greater Than or Equal X'
// problem link https://leetcode.com/problems/Special-Array-With-X-Elements-Greater-Than-or-Equal-X/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let len = nums.length;
  let counts = Array(len + 1).fill(0);

  // Count how many numbers are greater than each possible value from 0 to len
  for (let i = 0; i < len; i++) {
    if (nums[i] > len) {
      counts[len] += 1;
    } else {
      counts[nums[i]] += 1;
    }
  }

  // Accumulate counts from the end of the array towards the beginning
  for (let i = len - 1; i >= 1; i--) {
    counts[i] += counts[i + 1];
  }

  // Check for the special number
  for (let i = 1; i <= len; i++) {
    if (counts[i] === i) return i;
  }

  return -1;
};
