// leet code challenge 'Nim Game'
// problem link https://leetcode.com/problems/nim-game/description/

public class Solution {
    public bool CanWinNim(int n) {
        return !(n % 4 == 0);
    }
}