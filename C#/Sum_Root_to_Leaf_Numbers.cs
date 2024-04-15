// leet code challenge 'Sum Root to Leaf Numbers'
// problem link https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int SumNumbers(TreeNode root) {
        List<int> result = new List<int>();
        void helper(TreeNode node,int count) {
            if (node == null) {
                return;
            }
            count += node.val;
            if (node.left == null && node.right == null) { // If it's a leaf node
                result.Add(count);
                return;
            }
            helper(node.left, count * 10); // Multiply by 10 to shift digits to the left
            helper(node.right, count * 10); // Multiply by 10 to shift digits to the left
        }
        helper(root, 0);
        int res = 0; 
        foreach(int x in result)res += x;
        return res;
    }
}