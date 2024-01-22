// leet code challenge 'Set Mismatch'
// problem link https://leetcode.com/problems/set-mismatch/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  // Initialize variables to store duplicate and missing numbers
  let dup = -1,
    missing = -1;

  // Create a HashMap to store the frequency of each number
  const numFrequency = new Map();

  // Iterate through the array to populate the HashMap
  for (const num of nums) {
    numFrequency.set(num, (numFrequency.get(num) || 0) + 1);
  }

  // Iterate from 1 to the length of the array
  for (let i = 1; i <= nums.length; i++) {
    // Check if the current number is a duplicate
    if (numFrequency.get(i) === 2) {
      dup = i;
    }
    // Check if the current number is missing
    else if (!numFrequency.has(i)) {
      missing = i;
    }
  }

  // Return the result as an array
  return [dup, missing];
};

console.log(findErrorNums([2, 2]));
