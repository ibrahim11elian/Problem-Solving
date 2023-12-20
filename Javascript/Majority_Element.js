// leet code challenge 'Majority Element'
// problem link https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */

// The dominant factor here is the sorting operation, so the overall time complexity of this solution is O(n log n).
var majorityElement = function (nums) {
  // Get the length of the input array
  let len = nums.length;
  // Initialize a counter variable to keep track of the frequency of the current number
  let counter = 0;

  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);

  // Iterate through the sorted array
  for (let i = 0; i < len; i++) {
    // Check if the current number is equal to the next number in the array
    if (nums[i] === nums[i + 1]) {
      // If equal, increment the counter
      counter++;
    } else {
      // If not equal, increment the counter and check if the counter exceeds half of the array length
      counter++;
      if (counter > len / 2) {
        // If the current number occurs more than half of the array length, return it as the majority element
        return nums[i];
      } else {
        // If not, reset the counter to 0
        counter = 0;
      }
    }
  }
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// better solution
// Boyer-Moore Voting Algorithm. It has a time complexity of O(n) and a space complexity of O(1).
// the main concept here is returning the most occurrence element in array as the problem says that "You may assume that the majority element always exists in the array".
var majorityElement = function (nums) {
  // Initialize variables to keep track of the potential majority element and its count
  let candidate;
  let count = 0;

  // Iterate through the array
  for (let num of nums) {
    // If count is zero, set the current number as the potential majority element
    if (count === 0) {
      candidate = num;
    }

    // If the current number is equal to the potential majority element, increment the count; otherwise, decrement it
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

// Example usage:
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const result = majorityElement(nums);
console.log(result); // Output: 4
