// leet code challenge 'First Unique Character in a String'
// problem link https://leetcode.com/problems/first-unique-character-in-a-string/description/

/**
 * This function takes a string as input and returns the index of the first non-repeating character in the string.
 * If there are no non-repeating characters, it returns -1.
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // Create an empty hash object to store character frequencies
  let hash = {};

  // Iterate through the input string and count the frequency of each character
  for (let i = 0, len = s.length; i < len; i++) {
    // If character already exists in hash, increment its count
    if (s[i] in hash) hash[s[i]] += 1;
    else hash[s[i]] = 1; // If character does not exist in hash, set its count to 1
  }

  // Iterate through the hash object to find the first non-repeating character
  for (c in hash) {
    if (hash[c] === 1)
      // If character count is 1, it is non-repeating
      return s.indexOf(c); // Return the index of the first occurrence of this character in the input string
  }

  // If no non-repeating character is found, return -1
  return -1;
};
