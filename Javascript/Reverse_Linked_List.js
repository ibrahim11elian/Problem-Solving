
// leet code challenge 'Reverse Linked List'
// problem link https://leetcode.com/problems/reverse-linked-list/

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
var reverseList = function (head) {
    let temp = head;
    let newList;
    if (!head) return head;
    while (temp) {
        if (newList) {
            head = head.next;
            temp.next = newList;
            newList = temp;
            temp = head;
        } else {
            head = head.next;
            newList = temp;
            newList.next = null;
            temp = head;
        }
    }
    return newList;
};
