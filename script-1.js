/*
You are given an array of characters:
const A = ['a', 'a', 'b', 'a', 'c', 'b', 'c', 'a', 'd', 'a', 'c'];
And a set of required characters:
const S = new Set(['a', 'b', 'c', 'd']);
Finds the smallest continuous sub-array of A that contains every character in S at least once.
A sub-array must keep the original order and must be continuous.
*/

const A = ["a", "a", "b", "a", "c", "b", "c", "a", "d", "a", "c"];
const S = new Set(["a", "b", "c", "d"]);

function findSubArray(A, S) {

  //How many unique characters we need for smallest subarray
  const required = S.size;

  /*
  - Track how many characters we currently have to compare against required
  - Define starting min length for slicing the array
  - Define starting index (0) for when we shrink the length
  */

  let have = 0;
  let left = 0;
  let minLength = Infinity;
  let minStart = 0;

  // Window to keep track of all character frequency
  const windowCount = {};

  /*
  - Log all characters in A into the window - moving from left to right across the entire array
  - Track all characters in windowCount
  - If we have the characters required, shrink the windowCount
  */
  for (let right = 0; right < A.length; right++) {
    let char = A[right];

    windowCount[char] = (windowCount[char] || 0) + 1;
    console.log("Current Window: ", windowCount);
    console.log(`Char: ${char} - Count in window: ${windowCount[char]}`);

    // If this is a required character and the first time it appears in the window
    // Increase have
    if (S.has(char) && windowCount[char] === 1) {
      have++;
    }

    console.log("Have is: ", have);

    // While we have a valid window, we make it as small as possible
    // Shrink and update the smallest length
    // Current: ['a', 'a', 'b', 'a', 'c', 'b', 'c', 'a', 'd']
    //           left(0)                               right(8)

    while (have === required && left <= right) {
      // Update minLength if the current window is smaller
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }

      const leftChar = A[left];
      windowCount[leftChar]--;

      if (S.has(leftChar) && windowCount[leftChar] === 0) {
        have--;
      }

      left++;
    }
  }

  //After the entire loop
  if (minLength === Infinity) {
    return null; // No valid subarray
  }
  const result = A.slice(minStart, minStart + minLength);

  console.log("Smallest subarray is: ", result);
  return result;
}

findSubArray(A, S);
