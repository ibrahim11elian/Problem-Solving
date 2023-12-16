// leet code problem 'Valid Anagram'
// problem link https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// this algorithm has a time complexity of O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  // Count characters in string s and add it to charCount as key and the value is its count in s.
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Subtract counts for characters in string t
  for (let char of t) {
    if (!charCount[char]) {
      return false; // Character not in string s
    }
    charCount[char]--;
  }

  return true; // All characters in s and t have the same count
};

// // this algorithm has a time complexity of O(n log n)
// var isAnagram = function (s, t) {
//   // Convert both input strings to lowercase and Remove spaces from both strings.
//   // Convert both strings into arrays of characters, sort them alphabetically, and then join them back into strings.
//   s = s.toLowerCase().replace(/\s/g, "").split("").sort().join("");
//   t = t.toLowerCase().replace(/\s/g, "").split("").sort().join("");

//   // Check if the modified strings are equal, indicating that the original strings are anagrams
//   return s === t;
// };

console.log(isAnagram("anagram", "nagaram"));
