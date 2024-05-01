// leet code challenge 'Reverse Prefix of Word'
// problem link https://leetcode.com/problems/reverse-prefix-of-word/description/

public class Solution {
    public string ReversePrefix(string word, char ch) {
        int index = word.IndexOf(ch);
        if (index != -1) {
            // Construct the reversed prefix and concatenate it with the rest of the string
            return ReverseString(word.Substring(0, index + 1)) + word.Substring(index + 1);
        }
        return word; // If the character is not found, return the original word
    }
    
    // Helper method to reverse a string
    private string ReverseString(string str) {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
}