// leet code challenge 'Get Equal Substrings Within Budget'
// problem link https://leetcode.com/problems/get-equal-substrings-within-budget/description/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let i = 0,
    j = 0; // (i) , (j) pointers of the sliding window
  let cost = 0;
  let result = 0;

  while (j < s.length) {
    // Iterate through the string with end pointer j
    // Calculate the cost of converting s[j] to t[j]
    cost += Math.abs(s[j].charCodeAt(0) - t[j].charCodeAt(0));

    // If the cost exceeds maxCost, adjust the start pointer i
    while (cost > maxCost) {
      // Subtract the cost of converting s[i] to t[i] from the total cost
      cost -= Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0));
      i++; // Move the start pointer to the right
    }

    // Update the result with the maximum length of the valid substring found so far
    result = Math.max(result, j - i + 1);
    j++; // Move the end pointer to the right
  }

  return result;
};
