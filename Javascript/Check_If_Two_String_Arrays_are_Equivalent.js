// leet code challenge 'Check If Two String Arrays are Equivalent'
// problem link https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join("") === word2.join("");
};
