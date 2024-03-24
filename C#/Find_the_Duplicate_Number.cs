// leet code challenge 'Find the Duplicate Number'
// problem link https://leetcode.com/problems/find-the-duplicate-number/description/

public class Solution {
    public int FindDuplicate(int[] nums) {
        // Initialize slow and fast pointers to traverse the array
        int slow = 0, fast = 0;
        
        // Loop until a duplicate is found
        while(true) {
            // Move the slow pointer one step forward
            slow = nums[slow];
            // Move the fast pointer two steps forward
            fast = nums[nums[fast]];
            // If both pointers point to the same element, a duplicate is found, so break the loop
            if(nums[slow] == nums[fast]) 
                break;
        }

        // Once a duplicate is found, initialize a new pointer to start from the beginning
        int newSlow = 0;

        // Traverse the array with both slow and newSlow pointers until they meet at the duplicate element
        while(nums[slow] != nums[newSlow]) {
            // Move the slow pointer one step forward
            slow = nums[slow];
            // Move the newSlow pointer one step forward
            newSlow = nums[newSlow];
        }

        // Return the duplicate element
        return nums[slow];
    }
}
