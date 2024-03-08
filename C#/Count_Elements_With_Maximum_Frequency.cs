// leet code challenge 'Count Elements With Maximum Frequency'
// problem link https://leetcode.com/problems/count-elements-with-maximum-frequency/description/

public class Solution {
    public  int MaxFrequencyElements(int[] nums)
    {
        Dictionary<int, int> map = new Dictionary<int, int>();

        // Count frequencies of each element
        foreach (int num in nums)
        {
            if (map.ContainsKey(num))
                map[num]++;
            else
                map[num] = 1;
        }

        // Find the maximum frequency
        int maxFrequency = map.Values.Max();

        // Find the sum of frequencies of elements with maximum frequency
        int result = 0;
        foreach (KeyValuePair<int, int> entry in map)
        {
            if (entry.Value == maxFrequency)
                result += entry.Value;
        }

        return result;
    }
}