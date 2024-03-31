// leet code challenge 'Intersection of Two Linked Lists'
// problem link https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Finds the intersection node of two singly-linked lists.
 * @param {ListNode} headA - The head of the first linked list.
 * @param {ListNode} headB - The head of the second linked list.
 * @return {ListNode} - The node at which the two lists intersect, or null if they do not intersect.
 */
var getIntersectionNode = function (headA, headB) {
  // Initialize two pointers, a Set, and variable to traverse the lists
  let set = new Set();
  let a = headA;
  let b = headB;

  // Loop until either an intersection is found or both lists are fully traversed
  while (a != b) {
    // Move pointer a to its next node or reset to headB if it reaches end
    a = a == null ? headB : a.next;
    // Move pointer b to its next node or reset to headA if it reaches end
    b = b == null ? headA : b.next;
  }

  // Return the intersection node if found, otherwise return null
  return a;
};
