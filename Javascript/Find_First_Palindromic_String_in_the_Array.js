// leet code challenge 'Find First Palindromic String in the Array'
// problem link https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (let i = 0, len = words.length; i < len; i++)
    if (words[i] === words[i].split("").reverse().join("")) return words[i];

  return "";
};
