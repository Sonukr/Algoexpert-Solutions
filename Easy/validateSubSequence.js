/* 
  Validate Subsequence
  Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

  Sample Input
  array = [5, 1, 22, 25, 6, -1, 8, 10]
  sequence = [1, 6, -1, 10]

  Sample Output
  true
*/

// Solution 1
function isValidSubsequenceS1(array, sequence) {  
  // Write your code here.
  let sequenceIndex = 0;
  for (let val of array) {
    if (val === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
  }
  return sequenceIndex === sequence.length;
}

// Solution 2
function isValidSubsequenceS2(array, sequence) {
  // Write your code here.
  let sequenceIndex = 0;
  for (const value of array) {
    // Break in case of sequenceIndex === sequence.length to avoid unnecessary iterations
    if (sequenceIndex === sequence.length) break;
    if (sequence[sequenceIndex] === value) sequenceIndex++;
  }
  return sequenceIndex === sequence.length;
}
