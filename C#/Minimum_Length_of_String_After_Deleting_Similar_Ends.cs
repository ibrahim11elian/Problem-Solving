// leet code challenge 'Minimum Length of String After Deleting Similar Ends'
// problem link https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/description/

public class Solution {
    public int MinimumLength(string s) {
        // If the length of the string is 1, it's already non-palindromic
        if (s.Length == 1) return 1;
        
        // Initialize pointers
        int l = 0, r = s.Length - 1;
        
        // Iterate until the pointers meet or cross
        while (l < r) {
            // If characters at the left and right pointers are equal
            if (s[l] == s[r]) {
                // Store the current character
                char curChar = s[l];
                
                // Move left pointer to the next different character from the left side
                while (l + 1 <= r && s[l + 1] == curChar) l++;
                
                // Move right pointer to the next different character from the right side
                while (r - 1 >= l && s[r - 1] == curChar) r--;
                
                // Move both pointers inward
                l++;
                r--;
            }
            else {
                // If characters at left and right pointers are not equal,
                // return the length of the substring between them
                return r - l + 1;
            }
        }
        
        // If the pointers meet or cross, return 1 as the entire string is non-palindromic
        return l == r ? 1 : 0;
    }
}
