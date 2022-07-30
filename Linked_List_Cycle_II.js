
// leet code challenge 'Linked List Cycle II'
// problem link https://leetcode.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head;
    let slow = head;
    let cycle = false;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) {
            cycle = true;
            break;
        }
    }
    if (cycle) {
        let temp = head;
        while (temp !== slow) {
            temp = temp.next;
            slow = slow.next;
        }
        return temp;
    }
    return null;
};