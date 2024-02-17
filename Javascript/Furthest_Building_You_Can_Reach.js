// leet code challenge 'Furthest Building You Can Reach'
// problem link https://leetcode.com/problems/furthest-building-you-can-reach/description/

class MaxHeap {
  constructor() {
    // Initialize an empty heap array
    this.heap = [];
  }

  push(val) {
    // Add a value to the heap array
    this.heap.push(val);
    // Restore the heap property by heapifying up
    this.heapifyUp(this.heap.length - 1);
  }

  pop() {
    // Check if the heap is empty
    if (this.isEmpty()) return null;
    // Store the root value (max value in max heap)
    const root = this.heap[0];
    // Replace the root with the last element in the heap
    const last = this.heap.pop();
    // If the heap is not empty, restore the heap property by heapifying down
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    // Return the original root value
    return root;
  }

  isEmpty() {
    // Check if the heap is empty
    return this.heap.length === 0;
  }

  heapifyUp(childIndex) {
    // Calculate the parent index
    let parentIndex = Math.floor((childIndex - 1) / 2);
    // Heapify up until the heap property is satisfied
    while (childIndex > 0 && this.heap[childIndex] > this.heap[parentIndex]) {
      // Swap the child and parent values
      this.swap(childIndex, parentIndex);
      // Update indices for the next iteration
      childIndex = parentIndex;
      parentIndex = Math.floor((childIndex - 1) / 2);
    }
  }

  heapifyDown(parentIndex) {
    // Calculate the indices of left and right children
    let leftChildIndex = 2 * parentIndex + 1;
    let rightChildIndex = 2 * parentIndex + 2;
    // Initialize the max index as the parent index
    let maxIndex = parentIndex;
    // Get the length of the heap
    const heapLength = this.heap.length;

    // Update the max index if the left child is greater than the parent
    if (
      leftChildIndex < heapLength &&
      this.heap[leftChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = leftChildIndex;
    }

    // Update the max index if the right child is greater than the current max
    if (
      rightChildIndex < heapLength &&
      this.heap[rightChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = rightChildIndex;
    }

    // If the max index is not the parent index, swap and heapify down recursively
    if (maxIndex !== parentIndex) {
      this.swap(maxIndex, parentIndex);
      this.heapifyDown(maxIndex);
    }
  }

  swap(i, j) {
    // Swap two elements in the heap array
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  peek() {
    // Return the root value without removing it
    return this.isEmpty() ? null : this.heap[0];
  }
}

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  // Create a max heap to store the negative height differences
  const maxHeap = new MaxHeap();
  // Iterate through the heights array
  for (let i = 0, len = heights.length; i < len - 1; i++) {
    // Calculate the difference in heights between adjacent buildings
    const diff = heights[i + 1] - heights[i];
    // If the difference is positive, the next building is taller
    if (diff > 0) {
      // Push the negative difference onto the max heap
      maxHeap.push(-diff);
      // If there are more differences than available ladders
      if (maxHeap.heap.length > ladders) {
        // Use bricks to cover the difference by popping the max value from the heap
        bricks += maxHeap.pop();
      }
      // If there are not enough bricks, return the current index
      if (bricks < 0) {
        return i;
      }
    }
  }
  // Return the index of the last building if all buildings can be reached
  return heights.length - 1;
};
