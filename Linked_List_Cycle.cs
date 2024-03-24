// leet code challenge 'Linked List Cycle'
// problem link https://leetcode.com/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    //  Method to detect cycle in a linked list using Floyd's Cycle Detection Algorithm. 
    //  If there's a cycle, the fast pointer will eventually catch up with the slow pointer inside the cycle. 
    public bool HasCycle(ListNode head) {
        // If the head is null, there can't be a cycle
        if(head == null) return false;
        
        // Initialize two pointers: fast and slow
        ListNode fast = head.next; // Fast pointer moves two steps at a time
        ListNode slow = head;      // Slow pointer moves one step at a time
        
        // Traverse the list until fast pointer reaches the end or encounters a cycle
        while (fast != null && fast.next != null) {
            // If fast and slow pointers meet, there's a cycle
            if(fast == slow) return true;
            else {
                // Move slow pointer one step
                slow = slow.next;
                // Move fast pointer two steps
                fast = fast.next.next;
            }
        }
        // If the loop exits, there's no cycle
        return false;        
    }
    
    // Alternative method to detect cycle using HashSet
    // public bool HasCycle(ListNode head) {
    //     HashSet<ListNode> set = new HashSet<ListNode>();
    //     while (head != null) {
    //         if (set.Contains(head)) {
    //             return true;
    //         }
    //         set.Add(head);
    //         head = head.next;
    //     }
    //     return false;
    // }
}