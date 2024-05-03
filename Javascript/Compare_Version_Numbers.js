// leet code challenge 'Compare Version Numbers'
// problem link https://leetcode.com/problems/compare-version-numbers/description/

/**
 * Function to compare two version strings.
 * @param {string} version1 - The first version string.
 * @param {string} version2 - The second version string.
 * @returns {number} - Returns -1 if version1 is less than version2,
 * 1 if version1 is greater than version2, and 0 if they are equal.
 */
var compareVersion = function (version1, version2) {
  // Splitting the version strings into arrays
  version1 = version1.split(".");
  version2 = version2.split(".");

  // Getting the lengths of the version arrays
  const v1Len = version1.length,
    v2Len = version2.length;
  let i = 0,
    j = 0;

  // Iterating through both version arrays simultaneously
  while (i < v1Len && j < v2Len) {
    // Parsing the version components as integers
    const v1 = parseInt(version1[i]),
      v2 = parseInt(version2[j]);

    // Comparing the version components
    if (v1 < v2) return -1;
    if (v1 > v2) return 1;

    // Moving to the next version component
    i++;
    j++;
  }

  // If one version has more components than the other, checking for non-zero components
  if (i < v1Len) {
    while (i < v1Len) if (parseInt(version1[i++]) > 0) return 1;
  } else if (j < v2Len) {
    while (j < v2Len) if (parseInt(version2[j++]) > 0) return -1;
  }

  // If both versions are equal
  return 0;
};
