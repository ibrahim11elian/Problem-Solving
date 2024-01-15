// leet code challenge 'Remove Duplicates from Sorted List'
// problem link https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * Removes duplicates from a sorted singly-linked list.
 * @param {ListNode} head - The head of the linked list.
 * @return {ListNode} - The head of the modified linked list without duplicates.
 */
var deleteDuplicates = function (head) {
  // Check if the linked list is empty
  if (!head) return head;

  // Initialize pointers: fast and slow
  let fast = head.next,
    slow = head;

  // Iterate through the list
  while (fast !== null) {
    // If duplicates are found
    if (fast.val === slow.val) {
      // Remove the duplicate node
      slow.next = fast.next;
      fast.next = null;
      fast = slow.next; // Move fast pointer to the next node after removal
    } else {
      // Move both pointers to the next nodes
      fast = fast.next;
      slow = slow.next;
    }
  }

  // Return the head of the modified linked list
  return head;
};
