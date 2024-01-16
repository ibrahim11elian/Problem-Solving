// leet code challenge 'Insert Delete GetRandom O(1)'
// problem link https://leetcode.com/problems/insert-delete-getrandom-o1/description/

class RandomizedSet {
  constructor() {
    this.set = new Set();
  }

  /**
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    const res = !this.set.has(val);
    this.set.add(val);
    class RandomizedSet {
      constructor() {
        // Initialize an empty set using JavaScript Set data structure.
        this.set = new Set();
      }

      /**
       * Inserts a value into the set.
       * @param {number} val - The value to be inserted.
       * @return {boolean} - Returns true if the value was not present in the set and was inserted, otherwise false.
       */
      insert(val) {
        // Check if the set already contains the value.
        const res = !this.set.has(val);

        // Add the value to the set.
        this.set.add(val);

        // Return true if the value was not present before (it was inserted), otherwise false.
        return res;
      }

      /**
       * Removes a value from the set.
       * @param {number} val - The value to be removed.
       * @return {boolean} - Returns true if the value was present in the set and was removed, otherwise false.
       */
      remove(val) {
        // Delete the value from the set and return true if the value was present (and removed), otherwise false.
        return this.set.delete(val);
      }

      /**
       * Gets a random element from the set.
       * @return {number} - Returns a random element from the set.
       */
      getRandom() {
        // Convert the set to an array and return a random element from the array.
        let arr = Array.from(this.set);
        return arr[Math.floor(Math.random() * arr.length)];
      }
    }

    return res;
  }
  /**
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    return this.set.delete(val);
  }
  /**
   * @return {number}
   */
  getRandom() {
    let arr = Array.from(this.set);
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
