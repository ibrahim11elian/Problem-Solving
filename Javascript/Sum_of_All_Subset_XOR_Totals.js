// leet code challenge 'Sum of All Subset XOR Totals'
// problem link https://leetcode.com/problems/Sum-of-All-Subset-XOR-Totals/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  // Helper function to recursively calculate XOR sum of all subsets
  const helper = (i, sum) => {
    // Base case: If we've considered all elements, return the accumulated sum
    if (i === nums.length) return sum;

    // Recursive case:
    // 1. Include the current element in the subset and calculate XOR
    // 2. Exclude the current element from the subset and keep the XOR unchanged
    // Sum the results of both choices
    return helper(i + 1, sum ^ nums[i]) + helper(i + 1, sum);
  };

  // Start the recursion with the first element and initial sum as 0
  return helper(0, 0);
};

/*
Time complexity: O(2^n), where n is the length of the input array. This is because we're considering all possible subsets of the input

EX: if nums = [a, b, c]

                                  helper(0, 0)
                                /             \
                    helper(1, 0 ^ a)        helper(1, 0)
                    /            \           /           \
            helper(2, 0 ^ a ^ b)  helper(2, 0 ^ a)  helper(2, 0 ^ b)  helper(2, 0)
            /        \          /      \         /        \          /      \
        helper(3, 0^a^b^c) helper(3,0^a^b) helper(3,0^a^c) helper(3,0^a) helper(3,0^b^c) helper(3,0^b) helper(3,0^c) helper(3,0)

*/
