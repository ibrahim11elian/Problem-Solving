// leet code challenge 'Bag of Tokens'
// problem link https://leetcode.com/problems/bag-of-tokens/description/

public class Solution {
    // This method calculates the maximum score achievable by playing a game with tokens.
    // The game rules are as follows:
    // - You start with a certain amount of power.
    // - You can spend power to gain points (score) by redeeming tokens.
    // - Each token has a cost (token value).
    // - You can also gain power by spending points (score) to redeem tokens back.
    // - The goal is to maximize the score.
    // - The input parameters are an array of token values and the initial power.
    // - The method returns the maximum score achievable.
    public int BagOfTokensScore(int[] tokens, int power) {
        // Sort the token values in ascending order to facilitate token redemption.
        Array.Sort(tokens);
        
        // Initialize variables to keep track of the current score and the maximum score achieved.
        int score = 0, res = 0;
        
        // Initialize pointers to the beginning and end of the sorted array.
        int l = 0, r = tokens.Length - 1;
        
        // Iterate through the array while there are tokens remaining to redeem.
        while (l <= r) {
            // If the current token can be redeemed with available power,
            // redeem it, increase the score, and move to the next token.
            if (tokens[l] <= power) {
                power -= tokens[l];
                score++;
                l++;
                // Update the maximum score achieved if necessary.
                res = Math.Max(res, score);
            }
            // If the score is greater than 0 and there are tokens left to redeem,
            // redeem a token by spending score to gain power.
            else if (score > 0) {
                power += tokens[r];
                score--;
                r--;
            }
            // If neither of the redemption options is possible, exit the loop.
            else {
                break;
            }
        }
        
        // Return the maximum score achieved.
        return res;
    }
}
