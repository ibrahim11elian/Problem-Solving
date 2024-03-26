// leet code challenge 'Longest Continuous Increasing Subsequence'
// problem link https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

public class Solution {
    // This method finds the length of the longest continuous increasing subsequence (LCIS) in an array of integers.
    public int FindLengthOfLCIS(int[] nums) {
        // Initialize result to 1 since any single element in the array is itself an increasing subsequence.
        int result = 1;
        // Initialize counter to 1 since the minimum length of an increasing subsequence is 1.
        int counter = 1;
        // Iterate through the array from the first element to the second last element.
        for(int i = 0; i < nums.Length - 1; i++) {
            // If the next element is greater than the current element, increment the counter.
            if(nums[i + 1] > nums[i])
                counter++;
            // If the next element is not greater than the current element, reset the counter to 1.
            else {
                counter = 1;
            }
            // Update the result to be the maximum of the current result and the counter.
            result = Math.Max(result, counter);
        }
        // Return the final result, which represents the length of the longest increasing subsequence.
        return result;
    }
}
