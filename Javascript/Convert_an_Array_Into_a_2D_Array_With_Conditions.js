// leet code challenge 'Convert an Array Into a 2D Array With Conditions'
// problem link https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  // If the input array is empty, return an empty array
  if (nums.length === 0) return [];

  // Initialize the result array with the first element
  let result = [[nums[0]]];

  // Iterate through the remaining elements in nums
  for (let i = 1; i < nums.length; i++) {
    let inserted = false;

    // Try to insert the element into an existing subarray
    for (let j = 0; j < result.length; j++) {
      if (!result[j].includes(nums[i])) {
        result[j].push(nums[i]);
        inserted = true;
        break;
      }
    }

    // If the element couldn't be inserted into any existing subarray, create a new subarray
    if (!inserted) {
      result.push([nums[i]]);
    }
  }

  return result;
};
