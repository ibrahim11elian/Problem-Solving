// leet code challenge 'Squares of a Sorted Array'
// problem link https://leetcode.com/problems/squares-of-a-sorted-array/description/

public class Solution {
    public int[] SortedSquares(int[] nums) {
        int n = nums.Length;
    int[] result = new int[n];
    
    int left = 0, right = n - 1;
    int index = n - 1;
    
    while (left <= right) {
        int leftSquare = nums[left] * nums[left];
        int rightSquare = nums[right] * nums[right];
        
        if (leftSquare > rightSquare) {
            result[index--] = leftSquare;
            left++;
        } else {
            result[index--] = rightSquare;
            right--;
        }
    }
    
    return result;
    }
}