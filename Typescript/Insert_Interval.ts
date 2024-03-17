// leet code challenge 'Insert Interval'
// problem link https://leetcode.com/problems/insert-interval/description/

function insert(intervals: number[][], newInterval: number[]): number[][] {
  // Extracting start and end values from the newInterval array
  let [newStart, newEnd]: number[] = newInterval;

  // Initializing an empty array to store the result
  let result: number[][] = [];

  // Looping through each interval in the intervals array
  for (let i = 0; i < intervals.length; i++) {
    // If the end of the new interval is less than the start of the current interval
    if (newEnd < intervals[i][0]) {
      // Add the new interval to the result array and concatenate it with the remaining intervals
      result.push([newStart, newEnd]);
      return [...result, ...intervals.slice(i)];
    }
    // If the start of the new interval is greater than the end of the current interval
    else if (newStart > intervals[i][1]) {
      // Add the current interval to the result array
      result.push(intervals[i]);
    }
    // If there's an overlap between the new interval and the current interval
    else {
      // Update the new interval to cover both intervals
      [newStart, newEnd] = [
        Math.min(newStart, intervals[i][0]),
        Math.max(newEnd, intervals[i][1]),
      ];
    }
  }
  // Add the final merged interval to the result array
  result.push([newStart, newEnd]);
  return result;
}
