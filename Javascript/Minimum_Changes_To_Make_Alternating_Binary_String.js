// leet code challenge 'Minimum Changes To Make Alternating Binary String'
// problem link https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  // Initialize counts for two possible starting patterns: 010101... and 101010...
  let count = [0, 0];

  // Iterate through the characters of the binary string
  for (let i = 0, len = s.length; i < len; i++) {
    // Check if the current character deviates from the expected pattern (0101... or 1010...)
    // Update counts based on the deviations for both starting patterns
    if (i % 2 === 0 && s[i] === "1") {
      count[0]++;
    } else if (i % 2 === 1 && s[i] === "0") {
      count[0]++;
    }

    if (i % 2 === 0 && s[i] === "0") {
      count[1]++;
    } else if (i % 2 === 1 && s[i] === "1") {
      count[1]++;
    }
  }

  // Return the minimum changes required to make the string alternate
  return Math.min(...count);
};

console.log(minOperations("10010100"));
