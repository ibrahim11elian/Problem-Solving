
// leet code challenge 'Palindrome Linked List'
// problem link https://leetcode.com/problems/palindrome-linked-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function reverse(head) {
    let cur = head;
    let prev = null;
    let next;
    while (cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    let start = head;
    let len = 0;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        len++;
    }

    let mid = reverse(slow);

    while (len) {
        len--;

        if (mid.val !== start.val) {
            return false;
        }

        mid = mid.next;
        start = start.next;
    }
    return true;
};