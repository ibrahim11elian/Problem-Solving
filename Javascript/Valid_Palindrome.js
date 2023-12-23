// leet code challenge 'Valid Palindrome'
// problem link https://leetcode.com/problems/valid-palindrome/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //  extract only alphanumeric characters and ignore other characters from the given string
  const alphanumericString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return alphanumericString.split("").reverse().join("") == alphanumericString;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
