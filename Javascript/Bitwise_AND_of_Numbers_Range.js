// leet code challenge 'Bitwise AND of Numbers Range'
// problem link https://leetcode.com/problems/bitwise-and-of-numbers-range/description/

/**
 * Function that calculates the bitwise AND of all numbers in the range [left, right].
 * @param {number} left - The left endpoint of the range.
 * @param {number} right - The right endpoint of the range.
 * @return {number} - The bitwise AND result.
 */
var rangeBitwiseAnd = function (left, right) {
  // Initialize a counter to track the number of shifts needed to make left and right equal.
  let i = 0;

  // Continue shifting bits to the right until left and right are equal.
  while (left !== right) {
    left = left >> 1; // Right shift left operand by 1 bit.
    right = right >> 1; // Right shift right operand by 1 bit.
    i++; // Increment the shift counter.
  }

  // Return the result of left shifted left operand by i bits.
  return left << i;
};
