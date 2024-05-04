// leet code challenge 'Boats to Save People'
// problem link https://leetcode.com/problems/boats-to-save-people/description/

public class Solution {
    public int NumRescueBoats(int[] people, int limit) {
        // Sort the array of people in ascending order
        Array.Sort(people);
        
        // Initialize variables to track the number of boats needed,
        // and the indices of the lightest and heaviest person
        int res = 0; // Number of boats
        int left = 0; // Index of the lightest person
        int right = people.Length - 1; // Index of the heaviest person
        
        // Iterate until all people are assigned to boats
        while (left <= right) {
            // Check if the lightest and heaviest person can fit into a single boat
            if (people[left] + people[right] <= limit) {
                left++; // Move to the next lightest person
            }
            right--; // Move to the next heaviest person
            res++; // Increment the number of boats used
        }
        
        // Return the total number of boats needed
        return res;
    }
}
