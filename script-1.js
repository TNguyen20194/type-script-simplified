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
    if(!A || !S || S.size === 0) return null;

    //How many unique characters we need for smallest subarray
    const required = S.size

    // Track how many characters we currently have
    // Then compare it to the required characters
    let have = 0;

    // Characters in current window
    const windowCount = {};

    let left = 0;
    let minLength = Infinity;
    let minStart = 0;

    // log all characters in A into window
    for(let right = 0; right < A.length; right ++) {
        const char = A[right];
        
        windowCount[char] = (windowCount[char] || 0) + 1;
        console.log("Characters logged in widnow: ", A[right], windowCount)

        // Check if this char is required and we now have it for the first time
        if(S.has(char) && windowCount[char] === 1) {
            have ++;
            console.log("Chars we have: ", have)
        }
        
        
        // Shrink the window from left while we have all the required chars
        while(have === required && left < right) {
            //Update minimum
            if(right - left + 1 < minLength){
                minLength = right - left + 1;
                minStart = left;
            };

            //Remove left chars
            const leftChar = A[left];
            windowCount[leftChar]--;


            if(S.has(leftChar) && windowCount[leftChar] === 0) {
                have--;
            }

            left++;
        }
    }
    if(minLength === Infinity) {
        return null // No valid subarray found
    }

    const result = A.slice(minStart, minStart + minLength);

    console.log("Smallest sub-array:", result);
    console.log("Start index:", minStart);
    console.log("Length:", minLength);
    
    return {
        subArray: result,
        startIndex: minStart,
        length: minLength
    };
}

findSubArray(A, S);
