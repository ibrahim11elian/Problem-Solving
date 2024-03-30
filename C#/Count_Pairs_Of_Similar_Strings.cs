// leet code challenge 'Count Pairs Of Similar Strings'
// problem link https://leetcode.com/problems/count-pairs-of-similar-strings/description/

public class Solution {
    public int SimilarPairs(string[] words) {
        int count = 0;

        for (int i = 0; i < words.Length; i++)
        {
            for (int j = i + 1; j < words.Length; j++)
            {
                if (AreSimilar(words[i], words[j]))
                {
                    count++;
                }
            }
        }

        return count;
    }

    static bool AreSimilar(string word1, string word2)
    {
        HashSet<char> set1 = new HashSet<char>(word1);
        HashSet<char> set2 = new HashSet<char>(word2);

        if (set1.Count != set2.Count)
        {
            return false;
        }

        foreach (char c in set1)
        {
            if (!set2.Contains(c))
            {
                return false;
            }
        }

        return true;
    }
}