// leet code challenge 'Execute Asynchronous Functions in Parallel'
// problem link https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/

/**
 * promiseAll - Resolves an array of promises concurrently and returns a promise
 * that resolves to an array of their respective resolved values.
 *
 * @param {Array<Function>} functions - An array of functions that return promises.
 * @return {Promise<any>} - A promise that resolves to an array of resolved values.
 */
var promiseAll = async function (functions) {
  // Return a new Promise to allow asynchronous resolution.
  return new Promise((resolve, reject) => {
    // Initialize a counter to keep track of resolved promises.
    let count = 0;

    // Iterate through each function in the input array.
    functions.forEach((fn, i) => {
      // Call the current function and handle its promise.
      fn()
        .then((val) => {
          // Replace the original function with its resolved value.
          functions[i] = val;

          // Increment the counter.
          count++;

          // Check if all promises have been resolved.
          if (count === functions.length) resolve(functions);
        })
        .catch((reason) => reject(reason)); // Reject the main promise if any function's promise is rejected.
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
