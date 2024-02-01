// leet code challenge 'Divide Array Into Arrays With Max Difference'
// problem link https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/

/**
 * Function to divide an array into groups of three elements such that the difference between the maximum and minimum elements in each group is less than or equal to a given value 'k'.
 * @param {number[]} nums
 * @param {number} k - The maximum allowed difference between the maximum and minimum elements in each group.
 * @return {number[][]} - An array containing groups of three elements that satisfy the condition, or an empty array if no such groups exist.
 */
var divideArray = function (nums, k) {
  // Sort the input array in ascending order.
  nums.sort((a, b) => a - b);

  // Initialize an empty array to store the result.
  const result = [];

  // Iterate over the sorted array in steps of three.
  for (let i = 0, len = nums.length; i < len; i += 3) {
    // Check if there are at least three elements remaining in the array
    // and if the difference between the maximum and minimum elements in the current group is less than or equal to 'k'.
    if (i + 2 < len && nums[i + 2] - nums[i] <= k) {
      // If the condition is satisfied, push the current group of three elements into the result array.
      result.push([nums[i], nums[i + 1], nums[i + 2]]);
    } else {
      // If the condition is not satisfied, return an empty array since it's impossible to form valid groups.
      return [];
    }
  }

  // Return the resulting array containing valid groups.
  return result;
};
