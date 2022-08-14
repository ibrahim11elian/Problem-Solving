// leet code challenge 'Backspace String Compare'
// problem link https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return removeChar(s) === removeChar(t);
};

const removeChar = (s) => {
  s = s.split("");
  let output = [];
  s.forEach((ele) => {
    if (ele === "#") {
      if (output.length !== 0) output.pop();
    } else {
      output.push(ele);
    }
  });

  return output.join("");
};

console.log(backspaceCompare("####ss######DD#", "#####D"));
