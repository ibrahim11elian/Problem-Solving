// leet code challenge '3Sum'
// problem link https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  // Initialize the list to store the unique triplets.
  let solutionList = [];
  // Use a map to keep track of unique solutions.
  let hashSolutions = new Map();

  // Sort the input array in ascending order.
  nums.sort((a, b) => a - b);

  // Iterate through each element in the array after it sorted.
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    // Skip duplicate elements to avoid duplicate triplets.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Calculate the target sum for the current element.
    const target = -nums[i];
    // Initialize two pointers, one starting from the next element and the other from the end.
    let left = i + 1;
    let right = len - 1;

    // Use a while loop to find pairs that sum up to the target.
    while (left < right) {
      // Calculate the sum of the current pair.
      const sum = nums[left] + nums[right];

      // Check if the sum equals the target.
      if (sum === target) {
        // Create a triplet from the current elements.
        const triplet = [nums[i], nums[left], nums[right]];

        // Convert the triplet to a string for uniqueness checking.
        const key = triplet.toString();

        // Check if the triplet is unique using the hashSolutions map.
        if (!hashSolutions.has(key)) {
          // Add the unique triplet to the solution list.
          solutionList.push(triplet);
          // Mark the triplet as seen in the hashSolutions map.
          hashSolutions.set(key, true);
        }

        // Move both pointers towards the center.
        left++;
        right--;
      } else if (sum < target) {
        // If the sum is less than the target, move the left pointer to increase the sum.
        left++;
      } else {
        // If the sum is greater than the target, move the right pointer to decrease the sum.
        right--;
      }
    }
  }

  // Return the list of unique triplets.
  return solutionList;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
