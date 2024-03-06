// leet code challenge 'Reverse Words in a String III'
// problem link https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
