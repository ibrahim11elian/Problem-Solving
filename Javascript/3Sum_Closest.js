// leet code challenge '3Sum Closest'
// problem link https://leetcode.com/problems/3sum-closest/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var threeSumClosest = function (nums, target) {
  // Sort the input array in ascending order.
  nums.sort((a, b) => a - b);

  // Initialize a variable to keep track of the closest sum found.
  let closestSum = nums[0] + nums[1] + nums[2];

  // Iterate through each element in the array after it's sorted.
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    // Skip duplicate elements to avoid duplicate triplets.
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = len - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        // Check for the closest sum to the target.
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }

        if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return closestSum;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0, 0, 0, 0], 1));
