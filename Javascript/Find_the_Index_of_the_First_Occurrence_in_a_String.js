// leet code challenge 'Find the Index of the First Occurrence in a String'
// problem link https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Returns the position of the first occurrence of a substring.
  return haystack.indexOf(needle);
};

console.log(strStr("leetcode", "leeto"));
