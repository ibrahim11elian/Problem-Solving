// leet code challenge 'Find Mode in Binary Search Tree'
// problem link https://leetcode.com/problems/find-mode-in-binary-search-tree/description/

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
 * @return {number[]}
 */
var findMode = function (root) {
  const res = []; // Array to store the mode(s)
  let prev = null; // Variable to track the previous node value
  let count = 0; // Counter for the occurrences of the current value
  let max = 0; // Variable to track the maximum count of any value

  // Helper function for in-order traversal of the tree
  const helper = (node) => {
    if (!node) return; // Base case: if the node is null, return

    helper(node.left); // Recursively traverse the left subtree

    // If the previous value is the same as the current node's value, increment the count
    if (prev !== null && prev === node.val) {
      count++;
    } else {
      // Otherwise, reset the count to 1 for the new value
      count = 1;
    }

    // If the current count is greater than the maximum count found so far
    if (count > max) {
      max = count; // Update the maximum count
      res.length = 0; // Clear the results array
      res.push(node.val); // Add the current node's value to the results
    } else if (count === max) {
      // If the current count is equal to the maximum count, add the current node's value to the results
      res.push(node.val);
    }

    prev = node.val; // Update the previous node value to the current node's value

    helper(node.right); // Recursively traverse the right subtree
  };

  helper(root); // Start the in-order traversal from the root

  return res; // Return the array containing the mode(s)
};
