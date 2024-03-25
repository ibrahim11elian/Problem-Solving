// leet code challenge 'Find All Duplicates in an Array'
// problem link https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

public class Solution {
    // This method finds duplicates in an array of integers using a space-optimized approach.
    // It aims to achieve a time complexity of O(n) and space complexity of O(1).
    // The approach utilizes the fact that the elements in the array are within the range of 1 to n,
    // where n is the length of the array. By marking the visited elements in the array itself as negative,
    // we can detect duplicates without using additional space.
    // Time complexity: O(n) - The entire array is traversed once.
    // Space complexity: O(1) - No additional space is used proportional to the size of the input.
    public IList<int> FindDuplicates(int[] nums) {
        List<int> result = new List<int>(); // Initialize a list to store duplicates
        for(int i = 0; i < nums.Length; i++) {
            if(nums[Math.Abs(nums[i]) - 1] < 0) // If the element at the corresponding index is negative, it means it has been visited before
                result.Add(Math.Abs(nums[i])); // Add the absolute value of the duplicate element to the result list
            else
                nums[Math.Abs(nums[i]) - 1] = -nums[Math.Abs(nums[i]) - 1]; // Mark the element at the corresponding index as negative to indicate it has been visited
        }
        return result; // Return the list of duplicates
    }
}
