// leet code challenge 'Even Odd Tree'
// problem link https://leetcode.com/problems/even-odd-tree/description/

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
    public bool IsEvenOddTree(TreeNode root) {
        bool even = true;
        var bfs = new Queue<TreeNode>();
        
        bfs.Enqueue(root);

        while (bfs.Count > 0)
        {
            
            double prev = even ? double.MinValue : double.MaxValue; // Initialize prev according to even/odd level
            int levelSize = bfs.Count; // Store the current level size

            for (int i = 0; i < levelSize; i++) {
                var node = bfs.Dequeue();

                // Check if the current node's value is valid
                if ((even && (node.val % 2 == 0 || node.val <= prev)) || 
                    (!even && (node.val % 2 == 1 || node.val >= prev))) 
                    return false;

                // Enqueue the child nodes if they exist
                if (node.left != null) bfs.Enqueue(node.left);
                if (node.right != null) bfs.Enqueue(node.right);
                
                prev = node.val; // Update prev to the current node's value
            }
            even = !even; // Switch to the next level
        }
        
        return true;
    }
}
