// leet code challenge 'Palindromic Substrings'
// problem link https://leetcode.com/problems/palindromic-substrings/description/

/**
 * This function counts the number of palindromic substrings in a given string 's'.
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let res = 0; // Initialize the result counter to 0
  // Iterate over each character in the string
  for (let i = 0, len = s.length; i < len; i++) {
    let l = i,
      r = i; // Initialize left and right pointers for expanding the substring
    // Expand the substring around the current character as the center (for odd length palindromes)
    while (l >= 0 && r < len && s[l] === s[r]) {
      res += 1; // Increment the result counter for each palindromic substring found
      l--; // Move left pointer to the left
      r++; // Move right pointer to the right
    }
    l = i;
    r = i + 1; // Reset the pointers for expanding the substring (for even length palindromes)
    // Expand the substring around the current position and its adjacent position (for even length palindromes)
    while (l >= 0 && r < len && s[l] === s[r]) {
      res += 1; // Increment the result counter for each palindromic substring found
      l--; // Move left pointer to the left
      r++; // Move right pointer to the right
    }
  }

  return res; // Return the total count of palindromic substrings
};
