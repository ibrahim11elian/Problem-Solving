/**
 * @param {Array} arr - The input array to be traversed.
 * @return {Generator} - A generator function for inorder traversal.
 */
var inorderTraversal = function* (arr) {
  // Initialize an array to store the flattened elements.
  let flattened = [];

  // Recursive function to flatten the nested array.
  function recursiveFlatten(subArray) {
    for (let element of subArray) {
      if (Array.isArray(element)) {
        // If the element is an array, recursively flatten it.
        recursiveFlatten(element);
      } else {
        // If the element is not an array, push it to the flattened array.
        flattened.push(element);
      }
    }
  }

  // Start the recursive flattening process.
  recursiveFlatten(arr);

  // Initialize an index for the generator to track the current position.
  let i = 0;

  // Generator function to yield values during traversal.
  while (i < flattened.length) {
    yield flattened[i++];
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
