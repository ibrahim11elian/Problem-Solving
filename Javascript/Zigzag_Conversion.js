// leet code challenge 'Zigzag Conversion'
// problem link https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s; // Return the original string if no zigzag transformation is needed
  }

  // Initialize an empty array 'res' to store the characters in a zigzag pattern
  let res = [];

  // Initialize variables for row and column
  let row = 0,
    col = 0;

  // Loop through each character in the input string 's'
  for (c of s) {
    // Ensure that 'res[row]' is defined before setting a value
    if (!res[row]) {
      res[row] = [];
    }

    // Check the conditions for zigzag pattern and set values accordingly
    if (col % (numRows - 1) == 0 || col == 0) {
      res[row][col] = c;
      // Move down the zigzag pattern if there is space below
      if (row + 1 < numRows) {
        row += 1;
      } else {
        // If at the bottom, move up one row and to the right
        row -= 1;
        col += 1;
      }
    } else {
      res[row][col] = c;
      // Move down the zigzag pattern if at the top
      if (row === 0) {
        row += 1;
      } else {
        // If not at the top, move down one row and to the right
        row -= 1;
        col += 1;
      }
    }
  }

  // Flatten the nested arrays and join the characters to form the final zigzag pattern
  return res.flat().join("");
};

console.log(convert("PAYPALISHIRING", 4)); // PINALSIGYAHRPI
