// leet code challenge 'Remove Nth Node From End of List'
// problem link https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        // Initialize a variable to store the length of the list
        int length = 1;
        // Initialize a pointer to traverse the list, starting from the head
        ListNode pointer = head;
        
        // Traverse the list to find its length
        while (pointer.next != null) {
            length++;
            pointer = pointer.next;
        }

        // Check if the list contains only one node or the node to be removed is the first node
        if (length == 1 || n == length) {
            // Return the next node after the head, effectively removing the head node
            return head.next; 
        }

        // Calculate the position of the node to be removed from the beginning of the list
        int nodeToRemove = length - n + 1;
        // Reset the value of n for further traversal
        n = 1;
        // Reset the pointer to the head of the list
        pointer = head;

        // Traverse the list to find the node before the one to be removed
        while (n < nodeToRemove && !(nodeToRemove - n == 1)) {
            n++;
            pointer = pointer.next;
        }

        // Remove the node by adjusting the next reference of the node before it
        ListNode removedNode = pointer.next;
        pointer.next = removedNode.next;
        // Set the next reference of the removed node to null
        removedNode.next = null;

        // Return the head of the modified list
        return head;
    }
}
