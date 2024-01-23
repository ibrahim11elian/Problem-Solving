// leet code challenge 'Binary Tree Inorder Traversal'
// problem link https://leetcode.com/problems/binary-tree-inorder-traversal/description/

// recursion way
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Performs an inorder traversal of a binary tree and returns an array of node values.
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
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

  // Return the final result array
  return result;
};

// iterative way

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Performs an iterative inorder traversal of a binary tree and returns an array of node values.
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      // Push the current node onto the stack and move to its left child
      stack.push(current);
      current = current.left;
    }

    // Pop the top node from the stack (current leftmost node)
    current = stack.pop();

    // Process the current node
    result.push(current.val);

    // Move to the right child of the current node
    current = current.right;
  }

  return result;
};
