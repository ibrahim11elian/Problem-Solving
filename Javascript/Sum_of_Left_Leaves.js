// leet code challenge 'Sum of Left Leaves'
// problem link https://leetcode.com/problems/sum-of-left-leaves/description/

var sumOfLeftLeaves = function (root) {
  let result = 0;
  function helper(node, isLeft) {
    if (!node) return;
    if (!node.left && !node.right && isLeft) {
      result += node.val;
      return;
    }
    helper(node.left, true);
    helper(node.right, false);
  }
  helper(root, false);
  return result;
};
