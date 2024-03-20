// leet code challenge 'Merge In Between Linked Lists'
// problem link https://leetcode.com/problems/merge-in-between-linked-lists/description/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    // Method to merge a portion of list1 with list2
    public ListNode MergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        // Finding the last node in list2
        ListNode lastNodeInL2 = list2;
        while(lastNodeInL2.next != null){
            lastNodeInL2 = lastNodeInL2.next;
        }

        // Traversing list1 to find the (a-1)th node
        ListNode p1 = list1;
        int c1 = 0;
        while(c1 + 1 != a){
            p1 = p1.next;
            c1++;
        }
        
        // p2 will point to the bth node
        ListNode p2 = p1;
        while(c1 < b){
            p2 = p2.next;
            c1++;
        }
        
        // Connecting the nodes
        p1.next = list2;
        lastNodeInL2.next = p2.next;
        p2.next = null;
        
        // Returning the merged list
        return list1;
    }
}
