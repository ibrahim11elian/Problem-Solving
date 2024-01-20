// leet code challenge 'Remove Duplicates from Sorted List II'
// problem link https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Function to delete duplicates from a sorted singly-linked list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // Create a dummy node to simplify handling edge cases
  let result = new ListNode(0);
  result.next = head;

  // Initialize a pointer to the last node without duplicates
  let lastNode = result;

  // Iterate through the linked list
  while (lastNode.next && lastNode.next.next) {
    // Check if the current node has the same value as the next node
    if (lastNode.next.val === lastNode.next.next.val) {
      // If duplicates are found, move the pointer to the next distinct node
      while (
        lastNode.next &&
        lastNode.next.next &&
        lastNode.next.val === lastNode.next.next.val
      ) {
        lastNode.next = lastNode.next.next;
      }
      // Skip the duplicates by updating the next pointer of the last distinct node
      lastNode.next = lastNode.next.next;
    } else {
      // If no duplicates, simply move the pointer to the next node
      lastNode = lastNode.next;
    }
  }

  // Return the modified linked list without duplicates
  return result.next;
};

// example for building linked list and use the deleteDuplicates function

// Given array
let array = [1, 1, 1, 2, 3, 5, 5, 7];

// Create an empty array to store ListNode objects
let list = [];

// Create a linked list from the array
for (let i = array.length - 1; i >= 0; i--) {
  if (i === array.length - 1) {
    list.push(new ListNode(array[i]));
  } else {
    list.push(new ListNode(array[i], list[list.length - 1]));
  }
}

// Call the deleteDuplicates function on the last element of the list
let result = deleteDuplicates(list[list.length - 1]);

// Create an empty array to store the values of the modified linked list
let arr = [];

// Traverse the modified linked list and store its values in the 'arr' array
while (result) {
  arr.push(result.val);
  result = result.next;
}

// Print the 'arr' array
console.log(arr);
