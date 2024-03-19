// leet code challenge 'Move Zeroes'
// problem link https://leetcode.com/problems/move-zeroes/description/

class Solution{
    public void MoveZeroes(int[] nums) {
        int i = 0,
        nonZeroI = 0;
        while (i < nums.Length) {
            if (nums[i] != 0) {
                // Swap non-zero element with the element at nonZeroI index and increment nonZeroI
                int temp = nums[i];
                nums[i] = nums[nonZeroI];
                nums[nonZeroI] = temp;
                nonZeroI++;
            }
            i++;
        }
    }
}