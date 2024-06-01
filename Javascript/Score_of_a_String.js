// leet code challenge 'Score of a String'
// problem link https://leetcode.com/problems/score-of-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    res += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }

  return res;
};
