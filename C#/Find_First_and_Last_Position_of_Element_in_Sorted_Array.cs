// leet code challenge 'Find First and Last Position of Element in Sorted Array'
// problem link https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

public class Solution {
    // Method to search for the range of occurrences of a target element in a sorted array
    public int[] SearchRange(int[] nums, int target) {
        // Initialize result array with default values indicating no occurrence found
        int[] res = {-1, -1};
        // Find the index of the target element using binary search
        int n = BinarySearch(nums, target);
        // If the target element is found
        if (n != -1) {
            int i = n;
            // Find the leftmost occurrence of the target element
            while (n > 0 && nums[n - 1] == target) n--;
            // Find the rightmost occurrence of the target element
            while (i < nums.Length - 1 && nums[i + 1] == target) i++;
            // Update the result array with the range of occurrences
            res[0] = n;
            res[1] = i;
        }
        // Return the result array
        return res;
    }

    // Binary search method to find the index of the target element in the array
    int BinarySearch(int[] nums, int target) {
        // Initialize left and right pointers
        int l = 0;
        int r = nums.Length - 1;

        while (l <= r) {
            // Calculate mid index
            int m = (l + r) / 2;
            // If target is found, return its index
            if (nums[m] == target) {
                return m;
            }
            // If target is smaller, search left subarray
            else if (nums[m] < target) {
                l = m + 1;
            }
            // If target is larger, search right subarray
            else {
                r = m - 1;
            }
        }
        // Return -1 if target is not found in the array
        return -1;
    }
}
