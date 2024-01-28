// leet code challenge 'Split a String in Balanced Strings'
// problem link https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let counter = 0,
    balance = 0;
  s.split("").forEach((c) => {
    if (c === "L") balance++;
    if (c === "R") balance--;
    if (balance === 0) counter++;
  });

  return counter;
};

console.log(balancedStringSplit("RLRRLLRLRL"));
