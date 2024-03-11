// leet code challenge 'Custom Sort String'
// problem link https://leetcode.com/problems/custom-sort-string/description/

public class Solution {
    public string CustomSortString(string order, string s) {
        // Create a dictionary to store character counts
        Dictionary<char, int> map = new Dictionary<char, int>();

        // Count occurrences of characters in input string 's'
        foreach (char c in s) {
            if (map.ContainsKey(c))
                map[c]++; // Increment count if character already exists in the dictionary
            else
                map[c] = 1; // Otherwise, add the character to the dictionary with count 1
        }

        // Reinitialize the string 's' to empty for constructing the sorted string
        s = "";

        // Append characters in the order specified by 'order'
        foreach (char c in order) {
            if (map.ContainsKey(c)) {
                // Append 'c' repeated 'map[c]' times to 's'
                for (int i = 0; i < map[c]; i++) {
                    s += c;
                }
                // Remove the character 'c' from the dictionary after appending
                map.Remove(c);
            }
        }

        // Append remaining characters (not present in 'order') to 's'
        foreach (KeyValuePair<char, int> entry in map) {
            // Append 'entry.Key' repeated 'entry.Value' times to 's'
            for (int i = 0; i < entry.Value; i++) {
                s += entry.Key;
            }
        }

        // Return the sorted string
        return s;
    }
}
