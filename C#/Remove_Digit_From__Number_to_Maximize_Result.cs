// leet code challenge 'Remove Digit From Number to Maximize Result'
// problem link https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/description/


public class Solution {
    public string RemoveDigit(string number, char digit)
    {
        List<string> res = [];
        for (int i = 0; i < number.Length; i++)
        {
            if (number[i] == digit)
            {
                res.Add(number.Remove(i,1));
            }
        }
        string max = res[0];
        for (int i = 1; i < res.Count; i++)
        {
            if (res[i].CompareTo(max) > 0)
            {
                max = res[i];
            }
        }

        return max;

    }
}