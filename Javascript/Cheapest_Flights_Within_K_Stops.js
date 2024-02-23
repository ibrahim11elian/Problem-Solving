// leet code challenge 'Cheapest Flights Within K Stops'
// problem link https://leetcode.com/problems/cheapest-flights-within-k-stops/description/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
function findCheapestPrice(n, flights, src, dst, k) {
  const INF = Number.MAX_SAFE_INTEGER; // Define infinity as the maximum safe integer value
  const distances = Array(n).fill(INF); // Initialize an array to store distances from source to all other vertices, initially set to infinity
  distances[src] = 0; // Set the distance from source to itself as 0 (base case)

  // Iterate k+1 times to allow for k stops
  for (let i = 0; i <= k; i++) {
    const tempDistances = distances.slice(); // Create a copy of distances array for each iteration
    // Iterate through each flight (edge) in the flights array
    for (const [from, to, cost] of flights) {
      // Update the temporary distances array if a shorter path is found
      if (
        distances[from] !== INF &&
        distances[from] + cost < tempDistances[to]
      ) {
        tempDistances[to] = distances[from] + cost;
      }
    }
    distances.splice(0, distances.length, ...tempDistances); // Update distances array with the temporary distances
  }

  // Check if a path from source to destination exists within k stops and return the minimum cost if so, otherwise return -1
  return distances[dst] !== INF ? distances[dst] : -1;
}
