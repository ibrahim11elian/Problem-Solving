// leet code challenge 'Remove Nodes From Linked List'
// problem link https://leetcode.com/problems/remove-nodes-from-linked-list/description/

/**
 * This function removes nodes from a singly-linked list such that the remaining nodes
 * form a non-decreasing sequence based on their values.
 *
 * Approach:
 * - Utilizes a monotonic-stack to store the values of nodes in non-decreasing order.
 * - Traverses the linked list and compares each node's value with the values stored in the stack.
 * - If the node's value is greater than the top value in the stack, pops elements from the stack until a greater or equal value is found.
 * - Pushes the node's value onto the stack.
 * - Reconstructs the linked list using the values stored in the stack, ensuring the order remains the same.
 * - Returns the head of the reconstructed linked list, excluding the dummy node.
 *
 * Time Complexity: O(n) - where n is the number of nodes in the list.
 * - Traversing the entire linked list takes O(n) time.
 * - Stack operations and reconstruction of the linked list also take O(n) time.
 *
 * Space Complexity: O(n)
 * - Uses a stack to store values, potentially containing all the nodes' values, leading to O(n) space complexity.
 * - Additionally, creates a new linked list to store the result, contributing to the space complexity.
 *
 * * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  // Initialize a stack to store values
  let stack = [];

  // Traverse the linked list
  while (head != null) {
    // Pop elements from the stack until a greater or equal value is found
    while (stack.length && stack[stack.length - 1] < head.val) {
      stack.pop();
    }

    // Push the node's value onto the stack
    stack.push(head.val);

    // Move to the next node
    head = head.next;
  }

  // Create a dummy node to hold the result
  let resPointer = new ListNode();
  // Initialize a pointer to the dummy node
  head = resPointer;

  // Reconstruct the linked list using the values stored in the stack
  for (let i = 0; i < stack.length; i++) {
    // Add a new node with the value from the stack to the result linked list
    head.next = new ListNode(stack[i], null);
    // Move the pointer to the next node
    head = head.next;
  }

  // Return the head of the reconstructed linked list, excluding the dummy node
  return resPointer.next;
};
