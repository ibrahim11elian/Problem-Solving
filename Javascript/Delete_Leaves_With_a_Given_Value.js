// leet code challenge 'Delete Leaves With a Given Value'
// problem link https://leetcode.com/problems/delete-leaves-with-a-given-value/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root - The root of the binary tree.
 * @param {number} target - The target value to remove.
 * @return {TreeNode} - The modified binary tree after removing leaf nodes with the target value.
 */
var removeLeafNodes = function (root, target) {
  // If the root is null, return null (base case for recursion).
  if (!root) return null;

  // Recursively call removeLeafNodes for the left and right subtrees.
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  // If the current node is a leaf node and its value matches the target, return null (remove it).
  if (!root.left && !root.right && root.val === target) return null;

  // Otherwise, return the current node.
  return root;
};
