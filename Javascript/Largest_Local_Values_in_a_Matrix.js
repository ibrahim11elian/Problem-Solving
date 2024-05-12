// leet code challenge 'Largest Local Values in a Matrix'
// problem link https://leetcode.com/problems/largest-local-values-in-a-matrix/description/

/**
 * Function to find the largest local value in each 3x3 subgrid of a given grid.
 * @param {number[][]} grid - The input grid.
 * @return {number[][]} - A 2D array containing the largest local value for each 3x3 subgrid.
 */
var largestLocal = function (grid) {
  // Get the length of the input grid
  let len = grid.length;

  // Initialize an empty array to store results
  let res = [];

  // Loop to create a 2D array with (len - 2) rows and (len - 2) columns, filled with zeros
  for (let i = 0; i < len - 2; i++) {
    res.push(new Array(len - 2).fill(0));
  }

  // Nested loops to iterate through each 3x3 subgrid
  for (let i = 0; i < len - 2; i++) {
    for (let j = 0; j < len - 2; j++) {
      // Nested loops to iterate within each 3x3 subgrid
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          // Update the value in res[i][j] with the maximum value encountered in the subgrid
          res[i][j] = Math.max(res[i][j], grid[k][l]);
        }
      }
    }
  }

  // Return the resulting 2D array
  return res;
};
