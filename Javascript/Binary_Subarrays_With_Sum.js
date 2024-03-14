// leet code challenge 'Binary Subarrays With Sum'
// problem link https://leetcode.com/problems/binary-subarrays-with-sum/description/

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  // Initialize variables
  let count = 0; // Total count of subarrays
  let sum = 0; // Cumulative sum of elements encountered so far
  let map = new Map(); // Map to store cumulative sum and its frequency

  // Initialize map with 0 sum encountered 1 time
  map.set(0, 1);

  // Iterate through each element of the array
  for (let i = 0; i < nums.length; i++) {
    // Add the current element to the cumulative sum
    sum += nums[i];

    // If there exists a sum (current_sum - goal) in the map,
    // increment count by the frequency associated with that sum
    if (map.has(sum - goal)) {
      count += map.get(sum - goal);
    }

    // Update the map by incrementing the count for the current sum
    if (!map.has(sum)) {
      map.set(sum, 1);
    } else {
      map.set(sum, map.get(sum) + 1);
    }
  }

  // Return the total count of subarrays that sum up to the given goal
  return count;
};
