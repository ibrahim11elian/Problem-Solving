// leet code challenge 'Relative Ranks'
// problem link https://leetcode.com/problems/relative-ranks/description/

public class Solution {
    // Method to find relative ranks for an array of scores
    public string[] FindRelativeRanks(int[] score) {
        // Clone the input array to preserve the original order
        int[] scores = (int[])score.Clone();
        
        // Sort the cloned array in ascending order
        Array.Sort(score);
        
        // Reverse the sorted array to have it in descending order
        Array.Reverse(score);
        
        // Initialize a list to store the relative ranks
        List<string> result = new List<string>(); 
        
        // Iterate through the original scores
        foreach(int s in scores){
            // Search for the current score in the sorted array
            int n = Search(score, s);
            
            // Determine the rank based on its index in the sorted array
            if(n == 0) result.Add("Gold Medal"); // If it's the highest score
            else if (n == 1) result.Add("Silver Medal"); // If it's the second highest score
            else if (n == 2) result.Add("Bronze Medal"); // If it's the third highest score
            else  result.Add((n + 1).ToString()); // For other scores, use their index in the sorted array
        }
        
        // Convert the list to an array and return
        return result.ToArray();
    }

    // Binary search method to find the index of a target value in a sorted array in DESC order
    public int Search (int[] arr,int target){
        int l = 0, r = arr.Length - 1;
        int mid;
        // Binary search loop
        while(l <= r){
            mid = (l + r) / 2;
            if(arr[mid] == target) return mid; // If the target is found, return its index
            else if(arr[mid] > target) l = mid + 1; // If the target is less than the mid element, search in the right half
            else r = mid - 1; // If the target is greater than the mid element, search in the left half
        }
        return -1; // If the target is not found, return -1
    }
}

// Almost the same approach but i use IndexOf method instead of building it.
// public class Solution {
//     // Method to find relative ranks for an array of scores
//     public string[] FindRelativeRanks(int[] scores) {
//         // Clone the input array to preserve the original order
//         int[] sortedScores = (int[])scores.Clone();
        
//         // Sort the cloned array in descending order
//         Array.Sort(sortedScores);
//         Array.Reverse(sortedScores);
        
//         // Initialize a list to store the relative ranks
//         List<string> result = new List<string>(); 
        
//         // Iterate through the original scores
//         foreach(int score in scores){
//             // Find the rank of the current score in the sorted array
//             int rank = Array.IndexOf(sortedScores, score);
            
//             // Determine the rank based on its index in the sorted array
//             if(rank == 0) 
//                 result.Add("Gold Medal"); // If it's the highest score
//             else if (rank == 1) 
//                 result.Add("Silver Medal"); // If it's the second highest score
//             else if (rank == 2) 
//                 result.Add("Bronze Medal"); // If it's the third highest score
//             else  
//                 result.Add((rank + 1).ToString()); // For other scores, use their index in the sorted array
//         }
        
//         // Convert the list to an array and return
//         return result.ToArray();
//     }
// }
