// leet code challenge 'Array Wrapper'
// problem link https://leetcode.com/problems/array-wrapper/description/

/**
 * @param {number[]} nums
 * @return {void}
 */
//  class ArrayWrapper that accepts an array of integers in its constructor.
class ArrayWrapper {
  constructor(nums) {
    this.nums = [...nums];
  }
  /**
   * @return {number}
   */
  // this function is just returns the sum of the all the elements of array
  valueOf() {
    return this.nums.reduce((acc, e) => acc + e, 0);
  }
  /**
   * @return {string}
   */
  // this function converts the array [1,2,3] to string "[1,2,3]"
  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
