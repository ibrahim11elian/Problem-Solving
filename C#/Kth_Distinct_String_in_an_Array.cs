// leet code challenge 'Kth Distinct String in an Array'
// problem link https://leetcode.com/problems/kth-distinct-string-in-an-array/description/

public class Solution {
    public string KthDistinct(string[] arr, int k) {
        List<string> result = new List<string>();
        Dictionary<string,int> map = new Dictionary<string,int>();

        foreach(string s in arr) {
            if (map.ContainsKey(s)) map[s] = map[s] + 1;
            else map[s] = 1;
        };

        foreach(KeyValuePair<string,int> s in map){
            if(s.Value == 1) result.Add(s.Key);
        }

        return k <= result.Count ? result[k - 1]  : "";
    }
}