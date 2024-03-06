// leet code challenge 'Reverse Words in a String III'
// problem link https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

public class Solution {
    public string ReverseWords(string s) {
        string[] arr = s.Split(" ");
        for (int i = 0; i < arr.Length; i++)
        {
           char[] x = arr[i].ToCharArray();
            Array.Reverse(x);
            arr[i] = new string(x);
        }
        return string.Join(" ",arr);
    }
}