// leet code challenge 'Minimum Number of Arrows to Burst Balloons'
// problem link https://leetcode.com/problems/Minimum-Number-of-Arrows-to-Burst-Balloons/description/

public class Solution {
    public int FindMinArrowShots(int[][] points) {
        // Initialize a counter to keep track of the number of arrows needed,
        // setting it to the length of the points array as we know that we need at most 'n' arrows,
        // where 'n' is the number of balloons.
        int counter = points.Length;

        // Sort the points array based on the start position of each interval
        Array.Sort(points, (a, b) => a[0].CompareTo(b[0]));

        // Initialize a variable to keep track of the previous interval
        int[] prev = points[0];

        // Loop through each interval starting from the second one
        for (int i = 1; i < points.Length; i++) {
            // Get the current interval
            int[] cur = points[i];

            // If the start of the current interval is less than or equal to the end of the previous interval
            if (cur[0] <= prev[1]) {
                // Decrement the counter as these intervals can be merged into one
                counter--;

                // Update the end of the previous interval to the minimum of the current interval's end and the previous interval's end
                prev[1] = Math.Min(cur[1], prev[1]);
            }
            else {
                // If the current interval does not overlap with the previous one, update the previous interval to the current one
                prev = cur;
            }
        }

        // Return the final count of arrows needed
        return counter;
    }
}