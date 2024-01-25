// leet code challenge ' Reverse String'
// problem link https://leetcode.com/problems/reverse-string/description/

/**
 * reverse string in place
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0, len = s.length, j = len - 1; j > i; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};

reverseString(["h", "e", "l", "l", "o"]);
