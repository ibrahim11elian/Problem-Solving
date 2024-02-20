// leet code challenge 'Missing Number'
// problem link https://leetcode.com/problems/missing-number/description/

/**
 * Sorting-based algorithm:
 * - Time Complexity: O(n log n) due to sorting.
 * - Space Complexity: O(1) as sorting is done in-place.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);
  // Iterate through the sorted array
  for (let i = 0, len = nums.length; i <= len; i++) {
    // If the index does not match the value at that index, return the index
    if (i !== nums[i]) return i;
  }
};

/**
 * Mathematical Calculation-based algorithm:
 * - Time Complexity: O(n) as it iterates through the array once.
 * - Space Complexity: O(1) as only a constant amount of extra space is used.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // Initialize result with the expected sum if no number is missing
  let result = nums.length;
  // Iterate through the input array
  for (let i = 0, len = nums.length; i < len; i++) {
    // Adjust the result by subtracting each element from its expected value
    result += i - nums[i];
  }

  return result; // Return the missing number
};

/**
 * Set-based algorithm:
 * - Time Complexity: O(n) due to iterating through the array once, and set operations are generally O(1).
 * - Space Complexity: O(n) due to the space used by the set.
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // Create a set to store the numbers in the input array
  let set = new Set(nums);
  // Iterate through a range of numbers from 0 to the length of the array
  for (let i = 0, len = nums.length; i <= len; i++) {
    // If the current number is not in the set, return it as the missing number
    if (!set.has(i)) return i;
  }
};
