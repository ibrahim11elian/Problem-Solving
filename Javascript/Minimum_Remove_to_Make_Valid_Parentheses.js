// leet code challenge 'Minimum Remove to Make Valid Parentheses'
// problem link https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let result = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      result.push(s[i]);
    } else if (s[i] === ")") {
      if (count > 0) {
        result.push(s[i]);
        count--;
      }
    } else result.push(s[i]);
  }

  if (count > 0) {
    s = result.join("");
    result = [];
    count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ")") {
        count++;
        result.push(s[i]);
      } else if (s[i] === "(") {
        if (count > 0) {
          result.push(s[i]);
          count--;
        }
      } else result.push(s[i]);
    }
    result = result.reverse();
  }

  return result.join("");
};
