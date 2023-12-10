// leet code problem 'Palindrome Number'
// problem link https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let s = x.toString().split("");
  let l = s.length;
  for (let i = 0, j = l - 1; i < l / 2; i++) {
    if (s[i] !== s[j]) {
      return false;
    }
    j--;
  }
  return true;
};

// better solution O(1)
// const reverseNumber = x.toString().split("").reverse().join("");
// return x == reverseNumber;

console.log(isPalindrome(234567898765432));
