// leet code challenge 'Implement Queue using Stacks'
// problem link https://leetcode.com/problems/implement-queue-using-stacks/description/

class MyQueue {
  constructor() {
    this.queue = [];
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.queue.push(x);
  }
  /**
   * @return {number}
   */
  pop() {
    if (this.empty()) throw new Error("Cannot pop from an empty queue");
    let temp = [];
    for (let i = 0, len = this.queue.length; i < len; i++) {
      temp.push(this.queue.pop());
    }
    let result = temp.pop();
    for (let i = 0, len = temp.length; i < len; i++) {
      this.queue.push(temp.pop());
    }
    return result;
  }
  /**
   * @return {number}
   */
  peek() {
    if (this.empty()) return -1;
    return this.queue[0];
  }
  /**
   * @return {boolean}
   */
  empty() {
    return this.queue.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
