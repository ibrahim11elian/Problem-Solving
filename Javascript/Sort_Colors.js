// leet code challenge 'Sort Colors'
// problem link https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = 0,
    white = 0,
    blue = 0;
  nums.forEach((num) => {
    if (num === 0) red++;
    if (num === 1) white++;
    if (num === 2) blue++;
  });

  for (let i = 0; i < nums.length; i++) {
    if (red > 0) {
      nums[i] = 0;
      red--;
      continue;
    }
    if (white > 0) {
      nums[i] = 1;
      white--;
      continue;
    }
    if (blue > 0) {
      nums[i] = 2;
      blue--;
      continue;
    }
  }
};
