// leet code challenge 'Find the Pivot Integer'
// problem link https://leetcode.com/problems/find-the-pivot-integer/description/

public class Solution {
    public int PivotInteger(int n) {
        int preSum = 1;
        int postSum = n;
        int l = 1,
            r = n;
        while (l < r) {
            if (preSum > postSum) {
                r -= 1;
                postSum += r;
            } else {
                l += 1;
                preSum += l;
            }
        }
        return preSum == postSum ? l : -1;
    }
}