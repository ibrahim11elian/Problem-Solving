// leet code challenge 'Find Bottom Left Tree Value'
// problem link https://leetcode.com/problems/find-bottom-left-tree-value/description/

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
     public int FindBottomLeftValue(TreeNode root) {
        
		var bfs = new Queue<TreeNode>();
		bfs.Enqueue(root);

		while (bfs.Count > 0)
		{
            root = bfs.Dequeue();

            if (root.right != null) bfs.Enqueue(root.right);
            if (root.left != null) bfs.Enqueue(root.left);
		}
        
		return root.val;
    }
}