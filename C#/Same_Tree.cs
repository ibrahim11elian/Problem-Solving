// leet code challenge 'Same Tree'
// problem link https://leetcode.com/problems/same-tree/description/

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
    public bool IsSameTree(TreeNode p, TreeNode q) {
        // Base case: if both nodes are null, they are the same
        if (p == null && q == null) {
            return true;
        }
        
        // If only one of the nodes is null, they are not the same
        if (p == null || q == null) {
            return false;
        }
        
        // Check if the values of the current nodes are equal
        if (p.val != q.val) {
            return false;
        }
        
        // Recursively check the left and right subtrees
        return IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
    }
}
