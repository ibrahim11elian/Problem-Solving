// leet code challenge 'Subsets'
// problem link https://leetcode.com/problems/subsets/description/

/**
 * @param {number[]} nums - The input array of numbers.
 * @return {number[][]} - All possible subsets of the input array.
 */
var subsets = function (nums) {
  let res = []; // This will store all the subsets.
  let subset = []; // This is a temporary list to store the current subset during the recursion.

  // Helper function to generate subsets. 'i' is the current index in nums.
  const helper = (i) => {
    // Base case: If we've considered all elements in nums.
    if (i === nums.length) {
      res.push([...subset]); // Add a copy of the current subset to the result.
      return; // Exit the function.
    }

    // Include nums[i] in the current subset.
    subset.push(nums[i]);
    helper(i + 1); // Recurse to the next element.

    // Exclude nums[i] from the current subset (backtrack).
    subset.pop();
    helper(i + 1); // Recurse to the next element without nums[i].
  };

  helper(0); // Start the recursion with the first index.

  return res; // Return all the generated subsets.
};
