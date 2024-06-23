// leet code challenge 'Count Number of Nice Subarrays'
// problem link https://leetcode.com/problems/count-number-of-nice-subarrays/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  let start = 0,
    tempStart = 0;
  let result = 0;
  let oddCount = 0;

  // Use a for loop instead of a while loop
  for (let end = 0; end < nums.length; end++) {
    // Increment oddCount if the current number is odd
    if (nums[end] % 2 !== 0) oddCount += 1;

    // If oddCount exceeds k, move the start pointer to reduce oddCount
    while (oddCount > k) {
      if (nums[start] % 2 !== 0) oddCount -= 1;
      start += 1;
      tempStart = start;
    }

    // If oddCount equals k, count the number of valid subarrays
    if (oddCount === k) {
      // Move tempStart to find the next odd number
      while (nums[tempStart] % 2 === 0) {
        tempStart += 1;
      }
      // Add the number of valid subarrays ending at end
      result += tempStart - start + 1;
    }
  }

  return result;
};
