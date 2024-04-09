// leet code challenge 'Time Needed to Buy Tickets'
// problem link https://leetcode.com/problems/time-needed-to-buy-tickets/description/

public class Solution {
    public int TimeRequiredToBuy(int[] tickets, int k) {
        // this approach has a time complexity of O(n), where n is the length of the input array 'tickets' 
        int result = 0; // Variable to store the total time required to buy tickets
        // Iterate through the tickets array
        for(int i = 0; i < tickets.Length; i++)
        {
            // If the current index is less than or equal to k
            if (i <= k){
                // If the ticket count at current index is less than the ticket count at index k
                if(tickets[i] < tickets[k]) 
                    result += tickets[i]; // Increment result by the ticket count at current index
                else 
                    result += tickets[k]; // Increment result by the ticket count at index k
            }else{ // If the current index is greater than k
                // If the ticket count at current index is less than the ticket count at index k
                if(tickets[i] < tickets[k]) 
                    result += tickets[i]; // Increment result by the ticket count at current index
                else 
                    result += tickets[k] - 1; // Increment result by ticket count at index k - 1
            }
        }
        return result; // Return the total time required to buy tickets

        // this approach has a time complexity of O(n * m), where n is the length of the input array 'tickets' 
        // and m is the number of tickets the person in position k can buy
        // int i = 0;
        // while (!(tickets[k] == 0)) {
        //     if (tickets[i] > 0) {
        //     tickets[i]--;
        //     result++;
        //     }
        //     if (i == tickets.Length - 1) i = 0;
        //     else i++;
        // }
        // return result;
    }
}
