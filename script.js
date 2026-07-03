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

// create a function that receives the array A and set S
// loop through each letter in A and store them in a container
// check if container contains matching letters in S
// if container does not contain matching letters in S, continues
// if yes, stop the try to reduce the letters in the container so that it has the smallest sub-array
// final container's length has to be = S.length

function findSubArray(A, S) {
  // store the smallest subarray
  let best = null;
  let bestStart = -1;
  let bestEnd = -1;

  for (let start = 0; start < A.length; start++) {
    console.log("start is: ", start);
    for (let end = start; end < A.length; end++) {
      console.log("end is: ", end);
      // store the sub array from the loop
      let subArray = A.slice(start, end + 1);
      console.log("Sub array is: ", subArray);

      // check if subarray contains all characters in S
      // create a flag to tell the loop to stop if condition is met
      let hasAllChar = true;

      for (let char of S) {
        if (!subArray.includes(char)) {
          hasAllChar = false;
          break;
        }
      }

      // If subArray contains all characters in S
      // Check if the subArray lenght is the smallest compared to "best"
      // if it is, store subArray in best, so best has the smallest subArray
      if (hasAllChar) {
        if (best === null || subArray.length < best.length) {
          best = subArray;
          bestStart = start;
          bestEnd = end;
        }
        break;
      }
    }
  }
  console.log("The smallest sub-array is: ", best);
  console.log("Start index: ", bestStart);
  console.log("End index: ", bestEnd);

  return {
    subArray: best,
    startIndex: bestStart,
    endIndes: bestEnd,
  };
}

findSubArray(A, S);
