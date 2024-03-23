// leet code challenge 'Reorder List'
// problem link https://leetcode.com/problems/reorder-list/description/

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
    public void ReorderList(ListNode head) {
        ListNode s = head;
        ListNode f = head.next;

        while (f != null && f.next != null) {
            s = s.next;
            f = f.next.next;
        }
        
        ListNode prev = null;
        ListNode current = s.next;
        s.next = null;
        while (current != null) {
            ListNode nextNode = current.next; // Store the next node
            current.next = prev; // Reverse the pointer
            prev = current; // Move prev to current node
            current = nextNode; // Move current to next node
        }

        
        ListNode first = head;
        ListNode second = prev;
        while(second != null){
            ListNode temp1 = first.next;
            ListNode temp2 = second.next;
            first.next = second;
            second.next = temp1;
            first = temp1;
            second = temp2;
        }
    }
}