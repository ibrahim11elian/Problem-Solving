// leet code challenge 'Add Two Numbers'
// problem link https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  return makeList(getsum(l1, l2));
};

const getsum = (l1, l2) => {
  let v1 = 0;
  let v2 = 0;
  let carry = 0;
  let result = [];
  while (l1 || l2 || carry) {
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }
    let sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    result.push(digit);
    v1 = 0;
    v2 = 0;
  }
  return result;
};

const makeList = (strinList) => {
  let head = new ListNode(0);
  head.val = strinList[0];
  let temp = head;
  for (i = 1; i < strinList.length; i++) {
    let node = new ListNode(0);
    node.val = strinList[i];
    temp.next = node;
    temp = temp.next;
  }
  return head;
};
