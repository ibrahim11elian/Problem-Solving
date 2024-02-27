// leet code challenge 'Diameter of Binary Tree'
// problem link https://leetcode.com/problems/diameter-of-binary-tree/description/

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
    // This method calculates the diameter of a binary tree.
    // The diameter of a binary tree is defined as the number of nodes along the longest path between any two nodes in the tree.
    // The path may or may not pass through the root node.
    public int DiameterOfBinaryTree(TreeNode root) {
        // An array to hold the result, initialized with a single element set to 0.
        int[] result = {0};

        // Depth-first search (DFS) function to traverse the tree and calculate the depth of each node.
        // The depth of a node is defined as the number of edges in the longest path from the node to a leaf node.
        int Dfs(TreeNode r){
            // Base case: If the current node is null (i.e., a leaf node), return -1.
            if(r == null) return -1;
            
            // Recursively calculate the depth of the left subtree.
            int left = Dfs(r.left);
            
            // Recursively calculate the depth of the right subtree.
            int right = Dfs(r.right);
            
            // Update the result to store the maximum diameter found so far.
            // The diameter passing through the current node is calculated as 2 + depth of left subtree + depth of right subtree.
            result[0] = Math.Max(result[0], 2 + left + right);
            
            // Return the depth of the current node.
            // The depth of a node is the maximum of the depths of its left and right subtrees plus 1.
            return 1 + Math.Max(left , right);
        }

        // Call the DFS function starting from the root node.
        Dfs(root);
        
        // Return the final result which holds the diameter of the binary tree.
        return result[0];
    }
}
