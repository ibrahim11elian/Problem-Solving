// leet code challenge 'Percentage of Letter in String'
// problem link https://leetcode.com/problems/percentage-of-letter-in-string/description/

public class Solution {
    public int PercentageLetter(string s, char letter) {
        int counter = 0;
        foreach (char c in s) if (letter == c) counter++;
        return (int)((counter / (double)s.Length) * 100);
    }
}