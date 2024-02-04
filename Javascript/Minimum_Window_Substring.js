// leet code challenge 'Minimum Window Substring'
// problem link https://leetcode.com/problems/minimum-window-substring/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // Check if t is an empty string, return an empty string in this case
  if (t === "") return "";

  // Create an empty object to store character frequencies of string t
  let hashT = {};

  // Create an empty object to represent the current window in s
  let window = {};

  // Populate hashT with character frequencies of string t
  t.split("").forEach((c) => {
    if (c in hashT) hashT[c] += 1;
    else hashT[c] = 1;
  });

  // Initialize counters for characters we have and characters we need
  let have = 0,
    need = Object.keys(hashT).length;

  // Initialize variables to track the minimum window substring
  let result = "";
  let minLen = Infinity; // Initialize minLen to a very large value
  let minStart = 0; // Initialize minStart to track the start index of the minimum window

  // Loop through each character in string s
  for (let i = 0, j = 0, len = s.length; i < len; i++) {
    // Update window with current character
    if (s[i] in window) window[s[i]] += 1;
    else window[s[i]] = 1;

    // If the current character is in hashT and its count in window matches the count in hashT,
    // increment the have counter
    if (s[i] in hashT && window[s[i]] === hashT[s[i]]) have += 1;

    // Check if the current window contains all characters in t
    while (have === need) {
      // Update the minimum window substring if the current window is smaller
      if (i - j + 1 < minLen) {
        minLen = i - j + 1;
        minStart = j; // Update minStart to track the start index of the minimum window
      }
      // Shrink the window by moving j forward
      window[s[j]] -= 1;
      // If the character at index j is in hashT and its count in window is less than its count in hashT,
      // decrement the have counter
      if (s[j] in hashT && window[s[j]] < hashT[s[j]]) have -= 1;
      j += 1; // Move j forward to shrink the window
    }
  }

  // If minLen is still Infinity, no valid window found, return an empty string
  if (minLen === Infinity) return "";

  // Return the minimum window substring from s
  return s.slice(minStart, minStart + minLen);
};
