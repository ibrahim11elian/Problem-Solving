// leet code challenge 'Number of 1 Bits'
// problem link https://leetcode.com/problems/number-of-1-bits/description/

/**
 * hammingWeight - Function to calculate the Hamming weight of a positive integer.
 *
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  // Convert the input integer to its binary representation as a string
  let str = n.toString(2);

  // Replace all occurrences of '0' in the binary string with an empty string
  let res = str.replace(/0/g, "");

  // Return the length of the resulting string, which represents the Hamming weight
  return res.length;
};
