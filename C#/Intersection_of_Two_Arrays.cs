// leet code challenge 'Intersection of Two Arrays'
// problem link https://leetcode.com/problems/intersection-of-two-arrays/description/

public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        HashSet<int> set1 = new HashSet<int>(nums1);
        HashSet<int> set2 = new HashSet<int>(nums2);
        HashSet<int> resultSet = new HashSet<int>();

        foreach (int num in set1) {
            if (set2.Contains(num)) {
                resultSet.Add(num);
            }
        }

            
        return new List<int>(resultSet).ToArray();
    }
}