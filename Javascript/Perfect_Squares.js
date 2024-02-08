// leet code challenge 'Perfect Squares'
// problem link https://leetcode.com/problems/perfect-squares/description/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // Create an array to store the minimum number of squares needed for each number from 0 to n
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0; // Base case: 0 requires 0 squares

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      // For each number i, try subtracting each perfect square j*j
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n]; // Return the minimum number of squares needed for n
};

// Test the function
console.log(numSquares(12)); // Output should be 3 (1^2 + 1^2 + 4^2 = 12)
