// leet code challenge 'Valid Parenthesis String'
// problem link https://leetcode.com/problems/valid-parenthesis-string/description/

public class Solution {
    // Method to check the validity of a string containing parentheses
    public bool CheckValidString(string s) {
        // Initialize counters for minimum and maximum left parentheses encountered
        int leftMin = 0, leftMax = 0;
        
        // Loop through each character in the string
        for (int i = 0; i < s.Length; i++) {
            // If the current character is an opening parenthesis '('
            if (s[i] == '(') {
                // Increment both minimum and maximum left parentheses counters
                leftMin += 1;
                leftMax += 1;
            }
            // If the current character is a closing parenthesis ')'
            else if (s[i] == ')') {
                // Decrement both minimum and maximum left parentheses counters
                leftMin -= 1;
                leftMax -= 1;
            }
            // If the current character is '*'
            else {
                // Treat '*' as either '(' or ')', so decrement minimum counter and increment maximum counter
                leftMin -= 1;
                leftMax += 1;
            }

            // If the maximum left parentheses counter becomes negative, the string is invalid, return false
            if (leftMax < 0) return false;
            
            // If the minimum left parentheses counter becomes negative, reset it to 0
            if (leftMin < 0) leftMin = 0;
        }

        // If at the end of the loop, the minimum left parentheses counter is 0, return true (valid)
        return leftMin == 0;
    }
}
