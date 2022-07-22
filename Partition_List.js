
// leet code challenge 'Roman to Integer'
// problem link https://leetcode.com/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {

    let firstHalf = new ListNode();
    let secondHalf = new ListNode();
    let tempFirst = firstHalf;
    let tempSecond = secondHalf;

    while (head) {
        if (head.val < x) {
            tempFirst.next = head;
            tempFirst = tempFirst.next
        } else {
            tempSecond.next = head;
            tempSecond = tempSecond.next
        }
        head = head.next;
    }
    tempSecond.next = null;
    tempFirst.next = secondHalf.next;
    return firstHalf.next;
};