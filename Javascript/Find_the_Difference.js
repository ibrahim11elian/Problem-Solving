// leet code challenge 'Find the Difference'
// problem link https://leetcode.com/problems/find-the-difference/description/

// solution using summing character codes
/**
 * Function to find the difference character between two strings s and t.
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @returns {character} - The character that is present in 't' but not in 's'.
 */
var findTheDifference = function (s, t) {
  // Calculate sum of character codes in string 's'
  let sumS = 0;
  for (const c of s) {
    sumS += c.charCodeAt(0);
  }
  // Calculate sum of character codes in string 't'
  let sumT = 0;
  for (const c of t) {
    sumT += c.charCodeAt(0);
  }
  // Find the difference in sums, which corresponds to the extra character in 't'
  let def = sumT - sumS;
  // Convert the difference back to the corresponding character and return
  return String.fromCharCode(def);
};

// solution using bitwise XOR
/**
 * Function to find the difference character between two strings s and t using bitwise XOR.
 * @param {string} s - The first input string.
 * @param {string} t - The second input string.
 * @returns {character} - The character that is present in 't' but not in 's'.
 */
var findTheDifferenceXOR = function (s, t) {
  // Initialize result to 0
  let result = 0;
  // XOR all character codes in string 's'
  for (let i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
  }
  // XOR all character codes in string 't'
  for (let i = 0; i < t.length; i++) {
    result ^= t.charCodeAt(i);
  }
  // The remaining value in 'result' will correspond to the extra character in 't'
  // Convert the result back to the corresponding character and return
  return String.fromCharCode(result);
};
