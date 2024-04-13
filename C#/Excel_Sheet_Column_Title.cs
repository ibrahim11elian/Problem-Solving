// leet code challenge 'Excel Sheet Column Title'
// problem link https://leetcode.com/problems/Excel-Sheet-Column-Title/description/

public class Solution {
    public string ConvertToTitle(int columnNumber) {
        string result = "";
        while(columnNumber > 0)
        {
            int remind = (columnNumber - 1) % 26;
            result +=Convert.ToChar(((int)'A') + remind);
            columnNumber = (columnNumber - 1) / 26;
        }
        char[] stringArray = result.ToCharArray();
        Array.Reverse(stringArray);
        string reversedStr = new string(stringArray);
        return reversedStr;
    }
}