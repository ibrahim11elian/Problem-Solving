// leet code challenge 'Append Characters to String to Make Subsequence'
// problem link https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let prefix = 0;
  let i = 0,
    j = 0;
  while (i < s.length) {
    if (s[i] === t[j]) {
      while (s[i] === t[j] && i < s.length && j < t.length) {
        prefix++;
        i++;
        j++;
      }
    } else i++;
  }

  return t.length - prefix;
};
