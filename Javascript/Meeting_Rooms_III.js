// leet code challenge 'Meeting Rooms III'
// problem link https://leetcode.com/problems/meeting-rooms-iii/description/

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
function mostBooked(n, meetings) {
  // Initialize an array to store the number of meetings booked in each room
  const ans = new Array(n).fill(0);

  // Initialize an array to store the end time of the last meeting in each room
  const times = new Array(n).fill(0);

  // Sort the meetings array based on the start time of each meeting
  meetings.sort((a, b) => a[0] - b[0]);

  // Iterate through each meeting
  for (let i = 0; i < meetings.length; i++) {
    const [start, end] = meetings[i];
    let flag = false;
    let minind = -1;
    let val = Number.MAX_SAFE_INTEGER;

    // Search for the room with the earliest available end time
    for (let j = 0; j < n; j++) {
      if (times[j] < val) {
        val = times[j];
        minind = j;
      }
      // If a room is available, assign the meeting to that room
      if (times[j] <= start) {
        flag = true;
        ans[j]++;
        times[j] = end;
        break;
      }
    }

    // If no room is available, assign the meeting to the room with the earliest end time after adjusting its end time
    if (!flag) {
      ans[minind]++;
      times[minind] += end - start;
    }
  }

  // Find the room with the maximum number of booked meetings
  let maxi = -1;
  let id = -1;
  for (let i = 0; i < n; i++) {
    if (ans[i] > maxi) {
      maxi = ans[i];
      id = i;
    }
  }

  // Return the index of the room with the maximum number of booked meetings
  return id;
}
