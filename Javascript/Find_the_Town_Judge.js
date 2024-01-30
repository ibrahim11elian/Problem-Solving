// leet code challenge 'Find the Town Judge'
// problem link https://leetcode.com/problems/find-the-town-judge/description/

/**
 * Find the judge in a town based on trust relationships among the residents.
 * @param {number} N - Total number of people in the town.
 * @param {number[][]} trust - Array of pairs indicating trust relationships.
 * @return {number} - The judge's index if found, otherwise -1.
 */
var findJudge = function (N, trust) {
  // If there's only one person, that person is the judge
  if (N === 1) return 1;

  // Arrays to track who trusts whom and who is trusted by whom
  let trustedBy = new Array(N + 1).fill(null).map(() => []); // Initialize as empty arrays
  let trustsSomeone = new Array(N + 1).fill(false); // Initialize as false

  // Process each trust relationship
  for (let [a, b] of trust) {
    // Update trustedBy array to indicate person b is trusted by person a
    trustedBy[b].push(a);
    // Update trustsSomeone array to indicate person a trusts someone
    trustsSomeone[a] = true;
  }

  // Find the judge: a person who is trusted by everyone else and trusts no one
  for (let i = 1; i <= N; ++i) {
    if (!trustsSomeone[i] && trustedBy[i].length === N - 1) {
      return i; // Found the judge
    }
  }

  return -1; // No judge found
};

console.log(findJudge(2, [[1, 2]]));
