// leet code challenge 'Partition Array for Maximum Sum'
// problem link https://leetcode.com/problems/partition-array-for-maximum-sum/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  // Initialize an array to store the maximum sum achievable up to each index of the input array 'arr'
  let dp = new Array(arr.length).fill(0);

  // Iterate through each index of 'arr'
  for (let i = 0; i < arr.length; i++) {
    // Initialize variables to store the current maximum value and maximum sum achievable at index 'i'
    let curMax = 0;
    let maxAtI = 0;

    // Iterate through each possible subarray ending at index 'i' with a length at most 'k'
    for (let j = i; j > i - k; j--) {
      // If 'j' is out of bounds, break out of the loop
      if (j < 0) break;

      // Update 'curMax' to store the maximum element in the current subarray
      curMax = Math.max(curMax, arr[j]);

      // Calculate the size of the current window/subarray
      let windowSize = i - j + 1;

      // Calculate the current sum of the current subarray (maximum element * window size)
      let curSum = curMax * windowSize;

      // Calculate the sum of the maximum sum achievable up to index 'j-1' and the current sum
      let subSum = j > 0 ? dp[j - 1] : 0;

      // Update 'maxAtI' to store the maximum sum achievable up to index 'i'
      maxAtI = Math.max(maxAtI, curSum + subSum);
    }

    // Update 'dp[i]' to store the maximum sum achievable up to index 'i'
    dp[i] = maxAtI;
  }

  // Return the maximum sum achievable up to the last index of 'arr'
  return dp[arr.length - 1];
};
