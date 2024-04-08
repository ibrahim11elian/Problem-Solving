// leet code challenge 'Number of Students Unable to Eat Lunch'
// problem link https://leetcode.com/problems/Number-of-Students-Unable-to-Eat-Lunch/description/

public class Solution {
    public int CountStudents(int[] students, int[] sandwiches) {
        // Initialize a dictionary to store the count of each student preference
        Dictionary<int, int> hash = new Dictionary<int, int>();
        
        // Count the frequency of each student preference
        foreach (int student in students) {
            if (hash.ContainsKey(student))
                hash[student] += 1; // Increment count if already exists
            else
                hash[student] = 1; // Initialize count if not exists
        }
        
        // Initialize a counter to count students who didn't get their preferred sandwich
        int counter = 0;
        
        // Initialize a flag to track if a student didn't get their preferred sandwich
        bool flag = false;
        
        // Iterate through each sandwich
        foreach (int sandwich in sandwiches) {
            if (!flag) {
                // If flag is not set, try to distribute sandwiches according to student preferences
                if (hash.ContainsKey(sandwich) && hash[sandwich] >= 1) {
                    hash[sandwich] -= 1; // Decrement count if the sandwich preference is available
                } else {
                    counter++; // Increment counter if the sandwich preference is not available
                    flag = true; // Set flag to true to indicate further sandwiches won't be distributed according to preference
                }
            } else {
                counter++; // Increment counter if the flag is set, indicating the student didn't get their preferred sandwich
            }
        }
        
        // Return the count of students who didn't get their preferred sandwich
        return counter;
    }
}
