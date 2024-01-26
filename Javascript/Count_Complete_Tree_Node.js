// leet code challenge 'Count Complete Tree Nodes'
// problem link https://leetcode.com/problems/count-complete-tree-nodes/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let result = [];

  /**
   * Recursive helper function for inorder traversal.
   * @param {TreeNode} root
   * @param {number[]} result
   */
  function helper(root, result) {
    if (root !== null) {
      // Traverse left subtree
      helper(root.left, result);
      // Process current node
      result.push(root.val);
      // Traverse right subtree
      helper(root.right, result);
    }
  }

  // Start the traversal from the root
  helper(root, result);

  // Return the final result length
  return result.length;
};
