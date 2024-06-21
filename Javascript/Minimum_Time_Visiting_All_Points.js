// leet code challenge 'Minimum Time Visiting All Points'
// problem link https://leetcode.com/problems/minimum-time-visiting-all-points/

/**
 * Calculates the minimum time required to visit all points in a 2D plane.
 * @param {number[][]} points - An array of points, where each point is represented as [x, y].
 * @return {number} - The minimum time to visit all points.
 */
var minTimeToVisitAllPoints = function (points) {
  let res = 0; // Initialize the result variable to accumulate the total time

  // Iterate through each pair of consecutive points
  for (let i = 1; i < points.length; i++) {
    let [x, y] = points[i]; // Current point coordinates
    let [px, py] = points[i - 1]; // Previous point coordinates

    // Calculate the absolute differences in x and y coordinates between consecutive points
    const xDif = Math.abs(x - px);
    const yDif = Math.abs(y - py);

    // Add the maximum of the absolute differences to the result
    res += Math.max(xDif, yDif);
  }

  return res; // Return the total minimum time to visit all points
};

// this will work as well: (فرق السينات تربيع + فرق الصادات تربيع تحت الجزر)
// res += Math.sqrt((x - px) ** 2 + (y - py) ** 2);
