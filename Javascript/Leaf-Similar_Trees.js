// leet code challenge 'Leaf-Similar Trees'
// problem link https://leetcode.com/problems/leaf-similar-trees/description/

/**
 * Given two binary tree roots, checks if their leaf sequences are similar.
 * @param {TreeNode} root1 - The root of the first binary tree.
 * @param {TreeNode} root2 - The root of the second binary tree.
 * @return {boolean} - Returns true if the leaf sequences are similar, otherwise false.
 */
var leafSimilar = function (root1, root2) {
  // Arrays to store leaf values for each tree
  let leafsOne = [],
    leafsTwo = [];

  /**
   * Recursively collects leaf values of a binary tree and stores them in the specified array.
   * @param {TreeNode} node - The current node in the traversal.
   * @param {Array} leafsArr - The array to store leaf values.
   */
  const collectLeaf = (node, leafsArr) => {
    // Base case: if the node is null, return
    if (!node) {
      return;
    }

    // If the node is a leaf (no left or right child), add its value to the array
    if (!node.left && !node.right) {
      leafsArr.push(node.val);
    }

    // Recursively collect leaf values from the left and right subtrees
    collectLeaf(node.left, leafsArr);
    collectLeaf(node.right, leafsArr);
  };

  // Collect leaf values for both trees
  collectLeaf(root1, leafsOne);
  collectLeaf(root2, leafsTwo);

  // Check if the stringified arrays of leaf values are equal, indicating similar leaf sequences
  return JSON.stringify(leafsOne) === JSON.stringify(leafsTwo);
};
