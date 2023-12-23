// leet code challenge 'Path Crossing'
// problem link https://leetcode.com/problems/path-crossing/description/

/**
 * Determines if the given path crosses itself.
 * @param {string} path - The input path consisting of characters 'N', 'E', 'W', and 'S'.
 * @return {boolean} - True if the path crosses itself, false otherwise.
 */
var isPathCrossing = function (path) {
  // Initialize coordinates
  let x = 0,
    y = 0;

  // Create a set to store visited positions as strings
  let paths = new Set().add(`${y},${x}`);

  // Initialize flag to false
  let flag = false;

  // Iterate through each direction in the path
  for (let i = 0, len = path.length; i < len; i++) {
    // Update coordinates based on the current direction
    switch (path[i]) {
      case "N":
        if (paths.has(`${++y},${x}`)) flag = true;
        paths.add(`${y},${x}`);
        break;
      case "E":
        if (paths.has(`${y},${++x}`)) flag = true;
        paths.add(`${y},${x}`);
        break;
      case "W":
        if (paths.has(`${y},${--x}`)) flag = true;
        paths.add(`${y},${x}`);
        break;
      case "S":
        if (paths.has(`${--y},${x}`)) flag = true;
        paths.add(`${y},${x}`);
        break;
    }

    // If the flag is true, indicating crossing, exit the loop
    if (flag) return flag;
  }

  // Return the final value of the flag
  return flag;
};
// Time Complexity Analysis:
// The time complexity of this solution is O(n), where n is the length of the input path.
// This is because we iterate through each character in the path once and perform constant-time operations.

console.log(isPathCrossing("NESWW"));
