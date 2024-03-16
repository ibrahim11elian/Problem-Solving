// leet code challenge 'Contiguous Array'
// problem link https://leetcode.com/problems/contiguous-array/description/

public class Solution {
    // Method to find the maximum length of contiguous subarray with equal number of zeroes and ones
    public int FindMaxLength(int[] nums) {
        // Initialize variables to keep track of counts and result
        int zero = 0; // count of zeroes
        int ones = 0; // count of ones
        int result = 0; // maximum length of subarray with equal zeroes and ones
        
        // Dictionary to store the first occurrence of difference between counts of ones and zeroes
        Dictionary<int,int> map = new Dictionary<int,int>();

        // Iterate through the input array
        for (int i = 0; i < nums.Length; i++) {
            // Update counts based on current element
            if(nums[i] == 0) 
                zero += 1; // increment count of zeroes
            else 
                ones += 1; // increment count of ones
            
            // Calculate difference between counts of ones and zeroes
            int deff = ones - zero;
            
            // Check if current difference is encountered first time
            if (!map.ContainsKey(deff)) 
                map[deff] = i; // store current index for this difference
            
            // Check if equal counts of zeroes and ones found
            if (zero == ones) 
                result = ones + zero; // update result with total count of zeroes and ones
            else 
                result = Math.Max(result, i - map[ones - zero]); // update result with maximum length
            
        }
        // Return the maximum length of contiguous subarray with equal zeroes and ones
        return result;
    }
}
