// leet code challenge 'Event Emitter'
// problem link https://leetcode.com/problems/event-emitter/description/

class EventEmitter {
  events = {};

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events.hasOwnProperty(eventName))
      this.events[eventName] = new Set();

    this.events[eventName].add(callback);

    return {
      unsubscribe: () => {
        this.events[eventName].delete(callback);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events.hasOwnProperty(eventName) || !this.events[eventName]) {
      // Event doesn't exist or has no callbacks
      return [];
    }

    let result = [];

    (this.events[eventName] ?? []).forEach((cb) => result.push(cb(...args)));

    return result;
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit("onClick")); // []
