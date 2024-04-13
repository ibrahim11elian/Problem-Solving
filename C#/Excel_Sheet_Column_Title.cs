// leet code challenge 'Excel Sheet Column Title'
// problem link https://leetcode.com/problems/Excel-Sheet-Column-Title/description/

public class Solution {
    // This method converts a column number into its corresponding Excel column title.
    // For example, column number 1 corresponds to "A", 2 corresponds to "B", and so on.
    public string ConvertToTitle(int columnNumber) {
        // Initialize an empty string to store the resulting Excel column title.
        string result = "";
        
        // Iterate until the columnNumber is greater than 0.
        while(columnNumber > 0)
        {
            // Calculate the remainder when (columnNumber - 1) is divided by 26.
            int remind = (columnNumber - 1) % 26;
            
            // Convert the remainder into the corresponding character and append it to the result.
            result += Convert.ToChar(((int)'A') + remind);
            
            // Update columnNumber for the next iteration by dividing (columnNumber - 1) by 26.
            columnNumber = (columnNumber - 1) / 26;
        }
        
        // Reverse the characters in the result string since they were added in reverse order.
        char[] stringArray = result.ToCharArray();
        Array.Reverse(stringArray);
        string reversedStr = new string(stringArray);
        
        // Return the final Excel column title.
        return reversedStr;
    }
}
