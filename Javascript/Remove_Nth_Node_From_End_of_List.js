// leet code challenge 'Remove Nth Node From End of List'
// problem link https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Removes the nth node from the end of a linked list.
 * @param {ListNode} head - The head of the linked list.
 * @param {number} n - The position of the node to be removed from the end.
 * @return {ListNode} - The head of the modified linked list.
 */
var removeNthFromEnd = function (head, n) {
  // Step 1: Calculate the length of the linked list
  let length = 1;
  let pointer = head;
  while (pointer.next !== null) {
    pointer = pointer.next;
    length++;
  }

  // Step 2: Reset the pointer to the head and initialize a counter
  pointer = head;
  let counter = 1;

  // Step 3: Move the pointer to the node before the one to be removed
  while (counter < length - n) {
    pointer = pointer.next;
    counter++;
  }

  // Step 4: Remove the nth node from the end
  if (n === length) {
    // If the node to be removed is the head, update the head
    head = head.next;
  } else {
    // Otherwise, bypass the node to be removed
    pointer.next = pointer.next.next;
  }

  // Step 5: Return the head of the modified linked list
  return head;
};
