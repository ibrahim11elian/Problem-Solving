// leet code challenge 'Generate Fibonacci Sequence'
// problem link https://leetcode.com/problems/generate-fibonacci-sequence/description/

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  // Initialize an array with the first two Fibonacci numbers
  let arr = [0, 1];

  // Infinite loop to generate Fibonacci numbers
  while (true) {
    // Yield the current Fibonacci number
    yield arr[0];

    // Update the array to store the next two Fibonacci numbers
    [arr[0], arr[1]] = [arr[1], arr[0] + arr[1]];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
