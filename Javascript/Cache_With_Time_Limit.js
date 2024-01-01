// leet code challenge 'Cache With Time Limit'
// problem link https://leetcode.com/problems/cache-with-time-limit/description/

class TimeLimitedCache {
  constructor() {
    this.cache = {};
    this.cache.count = 0;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    let found = this.cache[key];
    if (found) {
      clearTimeout(this.cache[key].time);
      delete this.cache[key];
      --this.cache.count;
    } // Cancel previous timeout
    this.cache[key] = {
      value,
      time: setTimeout(() => {
        delete this.cache[key];
        --this.cache.count;
      }, duration),
    };
    ++this.cache.count;
    return !!found;
  }
  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    if (this.cache.hasOwnProperty(key)) {
      return this.cache[key].value;
    } else {
      return -1;
    }
  }
  /**
   * @return {number} count of non-expired keys
   */
  count() {
    return this.cache.count;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

// not my solution but better than mine
class TimeLimitedCache {
  keys = {};
  set(key, val, duration) {
    let res = false;
    if (key in this.keys && this.keys[key].duration > Date.now()) {
      res = true;
    }
    this.keys[key] = {
      val,
      duration: Date.now() + duration,
    };
    return res;
  }

  get(key) {
    if (key in this.keys && this.keys[key].duration > Date.now()) {
      return this.keys[key].val;
    }
    return -1;
  }

  count() {
    let count = 0;
    for (let [key, val] of Object.entries(this.keys)) {
      if (val.duration > Date.now()) {
        count++;
      }
    }
    return count;
  }
}

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 50)); // false
console.log(timeLimitedCache.set(1, 50, 100)); // true
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.get(1)); // -1
console.log(timeLimitedCache.count()); // 0
