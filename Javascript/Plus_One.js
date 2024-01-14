// leet code challenge 'Plus One'
// problem link https://leetcode.com/problems/plus-one/description/

/**
 * Function to add one to a non-negative integer represented by an array of digits.
 * @param {number[]} digits - Array of digits representing a non-negative integer.
 * @return {number[]} - Array representing the result of adding one to the integer.
 */
var plusOne = function (digits) {
  // Iterate through the digits array from right to left
  for (let i = digits.length - 1; i >= 0; --i) {
    // If the current digit is not 9, increment it by 1 and remove leading zeros
    if (digits[i] != 9) {
      digits[i] += 1;
      while (digits[0] === 0) {
        digits.shift();
      }
      return digits;
    } else {
      // If the current digit is 9
      // If the leftmost digit is 9, create a new array with leading 1 and other digits set to 0
      if (i === 0) {
        let res = [1];
        digits[i] = 0;
        return res.concat(digits);
      } else {
        // Set the current digit to 0
        digits[i] = 0;
      }
    }
  }
};
