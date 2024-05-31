// leet code challenge 'Single Number III'
// problem link https://leetcode.com/problems/single-number-iii/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // This variable will hold the XOR of the two unique numbers
  let xor = 0;

  // First pass: XOR all numbers in the array
  // This will result in xor being the XOR of the two unique numbers since
  // duplicates will cancel out each other
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  // Find a bit that is set in the XOR result (this bit is different between
  // the two unique numbers)
  let diffBit = 1;
  // Shift left until we find a bit that is set in the xor result
  while (!(xor & diffBit)) {
    diffBit = diffBit << 1;
  }

  // Initialize two variables to hold the two unique numbers
  let [a, b] = [0, 0];

  // Second pass: Divide numbers into two groups and XOR separately
  // The numbers in the first group have the diffBit set, the second group doesn't
  for (let i = 0; i < nums.length; i++) {
    if (diffBit & nums[i]) {
      // XOR numbers where the bit is set
      a = a ^ nums[i];
    } else {
      // XOR numbers where the bit is not set
      b = b ^ nums[i];
    }
  }

  // Return the two unique numbers
  return [a, b];
};

/**
 * Approach:
 * 1. XOR all numbers in the array. The result will be the XOR of the two unique numbers
 *    because all duplicates cancel out.
 * 2. Find a bit that is set in the XOR result. This bit is guaranteed to be different
 *    between the two unique numbers.
 * 3. Partition the numbers into two groups based on the identified bit, and XOR the numbers
 *    in each group. This will separate the two unique numbers into different groups.
 * 4. XORing all numbers in each group will cancel out the duplicates and leave only the
 *    unique number in each group.
 *
 * Complexity:
 * - Time complexity: O(n) because we iterate through the array twice (once to find the XOR
 *   of all numbers, and once to partition and find the two unique numbers).
 * - Space complexity: O(1) because we use a constant amount of extra space for variables.
 */
