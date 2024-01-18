// leet code challenge 'Single Number'
// problem link https://leetcode.com/problems/single-number/description/

// my solution
/**
 * Finds and returns the single number in an array that appears only once,
 * while all other numbers appear twice.
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Create an empty object to store number occurrences.
  let map = {};

  // Iterate through the array of numbers.
  nums.forEach((num) => {
    // If the number already exists in the map, remove it.
    if (num in map) {
      delete map[num];
    } else {
      // If the number doesn't exist in the map, add it.
      map[num] = 1;
    }
  });

  // Return the single number that appears only once.
  return Object.keys(map)[0];
};

// chatGPT solution
/**
 * Finds and returns the single number in an array that appears only once,
 * while all other numbers appear twice.
 *
 * @param {number[]} nums - An array of integers.
 * @return {number} - The single number that appears only once.
 */
var singleNumber = function (nums) {
  let result = 0;

  // XOR all the numbers in the array.
  nums.forEach((num) => {
    result ^= num;
  });

  // The final result is the single number.
  return result;
};
