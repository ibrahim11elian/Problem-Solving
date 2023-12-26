// leet code challenge 'Two Sum II - Input Array Is Sorted'
// problem link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description

/**
 * @param {number[]} nums - sorted array of integers.
 * @param {number} target - target sum of two numbers.
 * @return {number[]} - The indices (1-indexed) of the two numbers that add up to the target.
 */
function twoSum(nums, target) {
  // Iterate through the array
  for (let i = 0, len = nums.length; i < len; i++) {
    // Calculate the remaining value needed to reach the target
    let remaining = target - nums[i];

    // Initialize two pointers for binary search
    let left = i + 1;
    let right = len - 1;

    // Binary search for the remaining value
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // Check if the middle element is the remaining value
      if (nums[mid] === remaining) {
        // Found a pair, return the indices (1-indexed)
        return [i + 1, mid + 1];
      } else if (nums[mid] < remaining) {
        // If the middle element is less than the remaining value, search in the right half
        left = mid + 1;
      } else {
        // If the middle element is greater than the remaining value, search in the left half
        right = mid - 1;
      }
    }
  }

  // If no solution is found, return an empty array
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
