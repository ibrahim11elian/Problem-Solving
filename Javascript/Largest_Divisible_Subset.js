// leet code challenge 'Largest Divisible Subset'
// problem link https://leetcode.com/problems/largest-divisible-subset/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b); // Sort the input array of numbers in ascending order.
  const n = nums.length; // Store the length of the sorted array.
  const dp = new Array(n).fill(1); // Create an array `dp` of length `n` filled with 1s, representing the length of the subset at each index.
  let maxIndex = 0; // Initialize `maxIndex` to track the index of the maximum element in the subset.

  // Iterate through the sorted array from index 1 to n-1.
  for (let i = 1; i < n; i++) {
    // Iterate through the elements before index `i`.
    for (let j = 0; j < i; j++) {
      // If the element at index `i` is divisible by the element at index `j`:
      if (nums[i] % nums[j] === 0) {
        // Update the length of the subset ending at index `i`.
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // Update `maxIndex` to the index of the maximum element in the subset.
    if (dp[i] > dp[maxIndex]) {
      maxIndex = i;
    }
  }

  const result = []; // Initialize an empty array `result` to store the largest divisible subset.
  let prev = nums[maxIndex]; // Initialize `prev` to the maximum element in the subset.
  let count = dp[maxIndex]; // Initialize `count` to the length of the largest divisible subset.
  // Iterate backwards from `maxIndex` to 0 to reconstruct the largest divisible subset.
  for (let i = maxIndex; i >= 0; i--) {
    // If `prev` is divisible by the element at index `i` and the length of subset at index `i` is equal to `count`:
    if (prev % nums[i] === 0 && dp[i] === count) {
      // Add the element at index `i` to the beginning of `result`.
      result.unshift(nums[i]);
      // Update `prev` to the current element.
      prev = nums[i];
      // Decrement `count`.
      count--;
    }
  }

  return result; // Return the largest divisible subset.
};

console.log(largestDivisibleSubset([3, 4, 16, 8]));
