
// leet code challenge 'Merge Two Sorted Lists'
// problem link https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let small = smallList(list1, list2);
    let big;
    if (small === list1) {
        big = list2;
    } else {
        big = list1;
    }
    let tempSmall;
    let tempBig = big;
    while (small) {
        tempSmall = small;
        small = small.next;
        while (tempBig) {
            if (tempSmall.val > tempBig.val) {
                if (!tempBig.next) {//if it's the last node of the big list
                    tempSmall.next = tempBig.next;
                    tempBig.next = tempSmall;
                    tempBig = big;
                    break;
                }
                if (tempSmall.val < tempBig.next.val) {
                    tempSmall.next = tempBig.next;
                    tempBig.next = tempSmall;
                    tempBig = big;
                    break;
                }
                tempBig = tempBig.next;
            } else {
                if (tempSmall.val < tempBig.val && tempBig.val === big.val) {
                    tempSmall.next = big;
                    big = tempSmall;
                    tempBig = big;
                    break;
                }
                tempSmall.next = tempBig.next;
                tempBig.next = tempSmall;
                tempBig = big;
                break;
            }
        }

    }
    return big;
};

let smallList = (l1, l2) => {
    let count1 = l1;
    let size1 = 0;
    let count2 = l2;
    let size2 = 0;
    while (count1 && count2) {
        size1 += 1;
        size2 += 1;
        count1 = count1.next;
        count2 = count2.next;
    }
    if (size1 < size2) {
        return l1;
    } else if (size1 > size2) {
        return l2;
    } else if (l1 && l2) {
        if (size1 === size2) {
            return l1;
        }
    } else if (count1) {
        return l2;
    } else {
        return l1;
    }
};