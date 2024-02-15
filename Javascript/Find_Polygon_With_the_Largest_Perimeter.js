/**
 * This function calculates the largest possible perimeter of a triangle formed by selecting three lengths from the given array of numbers.
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  // Sorting the array in ascending order to easily identify the longest sides.
  nums.sort((a, b) => a - b);

  let sum = 0; // Variable to store the sum of the selected sides.
  let output = -1; // Variable to store the largest possible perimeter.

  // Iterating through the sorted array.
  for (let i = 0; i < nums.length; i++) {
    // Checking if the current side, nums[i], is smaller than the sum of the previous two sides.
    // If it is, it means we can form a triangle, so update the output with the largest perimeter found so far.
    if (nums[i] < sum) {
      output = nums[i] + sum;
    }
    sum += nums[i]; // Adding the current side to the sum.
  }

  return output; // Returning the largest possible perimeter.
};

console.log(largestPerimeter([5, 5, 50]));
