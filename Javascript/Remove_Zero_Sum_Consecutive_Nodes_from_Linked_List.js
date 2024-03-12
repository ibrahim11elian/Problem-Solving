// leet code challenge 'Remove Zero Sum Consecutive Nodes from Linked List'
// problem link https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  // Initialize variables for prefix sum and a map to store prefix sums and corresponding nodes
  let prefixSum = 0;
  let sumMap = new Map();

  // Create a dummy node to handle edge cases
  let dummy = new ListNode(0);
  dummy.next = head; // Point the dummy node to the head of the given linked list

  let current = dummy; // Start traversal from the dummy node

  // First traversal to calculate prefix sums and store them in the map
  while (current) {
    prefixSum += current.val; // Update prefix sum
    sumMap.set(prefixSum, current); // Store the current node with its prefix sum in the map
    current = current.next; // Move to the next node in the linked list
  }

  // Reset prefix sum and start traversal again from the dummy node
  prefixSum = 0;
  current = dummy;

  // Second traversal to update next pointers based on the prefix sums stored in the map
  while (current) {
    prefixSum += current.val; // Update prefix sum
    current.next = sumMap.get(prefixSum).next; // Update next pointer of the current node to skip zero-sum sublist
    current = current.next; // Move to the next node in the linked list
  }

  // Return the head of the modified linked list
  return dummy.next;
};
