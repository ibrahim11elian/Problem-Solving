// leet code challenge 'Minimum Operations to Exceed Threshold Value I'
// problem link https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/description/

public class Solution {
    public int MinOperations(int[] nums, int k) {
        int result = 0;
        foreach(int num in nums)
        {
            if(num < k) result++;
        }
        return result;
    }
}