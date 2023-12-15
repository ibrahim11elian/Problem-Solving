// leet code challenge 'Search Insert Position'
// problem link https://leetcode.com/problems/search-insert-position/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  // Get the length of the array
  let len = nums.length;

  // Initialize two pointers, 'low' and 'high', to define the search space
  let low = 0;
  let high = len - 1;

  // Continue the loop until the search space is exhausted
  while (low <= high) {
    // Calculate the middle index of the current search space
    let mid = Math.floor((low + high) / 2);

    // Check if the middle element is equal to the target
    if (nums[mid] === target) {
      return mid; // Target is found, return the index
    } else if (nums[mid] < target) {
      // If the target is greater than the middle element, update 'low' to search in the right half
      low = mid + 1;
    } else {
      // If the target is less than the middle element, update 'high' to search in the left half
      high = mid - 1;
    }
  }

  // If the loop exits, 'low' is the index where the target should be inserted
  return low;
};

console.log(searchInsert([1, 3, 5, 6], 4));
