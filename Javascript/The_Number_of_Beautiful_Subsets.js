// leet code challenge 'The Number of Beautiful Subsets'
// problem link https://leetcode.com/problems/the-number-of-beautiful-subsets/description/

var beautifulSubsets = function (nums, k) {
  // Map to track the elements currently included in the subset
  const map = new Map();

  // Helper function for recursive backtracking
  const helper = (i) => {
    // Base case: if we have processed all elements, return 1 to count this subset
    if (i >= nums.length) return 1;

    // Count subsets excluding the current element
    let count = helper(i + 1);

    // Check if including nums[i] does not violate the condition
    if (!map.has(nums[i] + k) && !map.has(nums[i] - k)) {
      // Include the current element in the subset
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
      // Count subsets including the current element
      count += helper(i + 1);
      // Backtrack: remove the current element from the subset
      map.set(nums[i], map.get(nums[i]) - 1);
      // Clean up the map to avoid unnecessary entries
      if (map.get(nums[i]) === 0) {
        map.delete(nums[i]);
      }
    }

    // Return the count of valid subsets from this point
    return count;
  };

  // Subtract 1 to exclude the empty subset from the final count
  return helper(0) - 1;
};
