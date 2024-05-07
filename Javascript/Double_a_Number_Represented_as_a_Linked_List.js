// leet code challenge 'Double a Number Represented as a Linked List'
// problem link https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head - The head of the linked list.
 * @return {ListNode} - The head of the modified linked list where each value is doubled.
 */
var doubleIt = function (head) {
  // Reverse the linked list to simplify traversal
  head = reverse(head);

  // Initialize carry for adding to the next digit
  let carry = 0;
  // Store the original head of the list
  let list = head;

  // Iterate over the reversed list
  while (head) {
    // Double the value of the current node and add carry
    let val = head.val * 2 + carry;

    // If the doubled value is greater than or equal to 10, adjust the node's value and carry
    if (val >= 10) {
      carry = Math.floor(val / 10);
      head.val = val % 10;
    } else {
      // If the doubled value is less than 10, update the node's value and reset carry
      head.val = val;
      carry = 0;
    }

    // Move to the next node
    if (head.next) head = head.next;
    // Exit the loop if it's the last node so we can add another node if there is carry left
    else break;
  }

  // If there's still a carry after traversing all nodes, append a new node with the carry
  if (carry) {
    let newNode = new ListNode(carry, null);
    head.next = newNode;
  }

  // Reverse the modified list to restore original order
  return reverse(list);
};

// Function to reverse a linked list
const reverse = (head) => {
  let cur = head,
    prev = null;
  while (cur) {
    head = cur.next;
    cur.next = prev;
    prev = cur;
    cur = head;
  }
  return prev;
};
