// leet code challenge 'Power of Two'
// problem link https://leetcode.com/problems/power-of-two/description/

/**
 *  Checks if a given number is a power of two.
 * @param {number} n - The number to be checked.
 * @return {boolean} - Returns true if the number is a power of two, otherwise returns false.
 */
var isPowerOfTwo = function (n) {
  let x = 1; // Start with x = 1
  while (x < n)
    // While x is less than the input number
    x *= 2; // Multiply x by 2 (shift left) to check if it matches a power of two
  return x === n; // Return true if x matches the input number, indicating it's a power of two
};

/**
 *  Checks if a given number is a power of two.
 * @param {number} n - The number to be checked.
 * @return {boolean} - Returns true if the number is a power of two, otherwise returns false.
 */
var isPowerOfTwo = function (n) {
  return n > 0 && !(n & (n - 1)); // Returns true if n is positive and has only one bit set (power of two)
};
