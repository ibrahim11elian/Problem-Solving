// leet code challenge 'Sequential Digits'
// problem link https://leetcode.com/problems/sequential-digits/description/

/**
 * Generates an array of sequential digits between the given low and high numbers (inclusive).
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  // Pre-defined array of sequential digits from 12 to 123456789
  let comp = [
    12, 23, 34, 45, 56, 67, 78, 89, 123, 234, 345, 456, 567, 678, 789, 1234,
    2345, 3456, 4567, 5678, 6789, 12345, 23456, 34567, 45678, 56789, 123456,
    234567, 345678, 456789, 1234567, 2345678, 3456789, 12345678, 23456789,
    123456789,
  ];

  // Filter the pre-defined array to get sequential digits within the specified range
  let result = comp.filter((e) => e >= low && e <= high);

  return result; // Return the array of sequential digits within the specified range
};

/**
 * Generates an array of sequential digits between the given low and high numbers (inclusive).
 * @param {number} low - The lower bound of the range.
 * @param {number} high - The upper bound of the range.
 * @return {number[]} - An array containing sequential digits within the specified range.
 */
var sequentialDigits = function (low, high) {
  const result = []; // Initialize an empty array to store the sequential digits
  const digits = "123456789"; // Define a string containing all possible digits

  // Iterate over all possible substrings of 'digits'
  for (let i = 0; i < digits.length; i++) {
    for (let j = i + 1; j <= digits.length; j++) {
      // Generate number from substring and check if it falls within the range
      const num = parseInt(digits.substring(i, j)); // Generate number from substring
      if (num >= low && num <= high) {
        // Check if num is within the range
        result.push(num); // Push num into the result array if it's within the range
      }
    }
  }

  result.sort((a, b) => a - b); // Sort the result array in ascending order

  return result; // Return the array containing sequential digits within the specified range
};

console.log(sequentialDigits(1000, 2000));
