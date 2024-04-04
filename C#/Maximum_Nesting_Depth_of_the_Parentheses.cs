// leet code challenge 'Maximum Nesting Depth of the Parentheses'
// problem link https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

public class Solution {
    public int MaxDepth(string s) {
        int max = 0;
        int count = 0;
        foreach (char c in s) {
            if (c == '(') {
                count++;
                max = Math.Max(count, max);
            } else if (c == ')') {
                count--;
            }
        }
        return max;
    }
}