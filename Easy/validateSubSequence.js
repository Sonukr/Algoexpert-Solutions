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

/* 

  Test Case 1
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, 10]
  }
  Test Case 2
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 25, 6, -1, 8, 10]
  }
  Test Case 3
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 6, -1, 8, 10]
  }
  Test Case 4
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [22, 25, 6]
  }
  Test Case 5
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, 10]
  }
  Test Case 6
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 10]
  }
  Test Case 7
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, -1, 8, 10]
  }
  Test Case 8
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [25]
  }
  Test Case 9
  {
    "array": [1, 1, 1, 1, 1],
    "sequence": [1, 1, 1]
  }
  Test Case 10
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 12]
  }
  Test Case 11
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [4, 5, 1, 22, 25, 6, -1, 8, 10]
  }
  Test Case 12
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 23, 6, -1, 8, 10]
  }
  Test Case 13
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 22, 25, 6, -1, 8, 10]
  }
  Test Case 14
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 22, 6, -1, 8, 10]
  }
  Test Case 15
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, -1]
  }
  Test Case 16
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, -1, 10]
  }
  Test Case 17
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, -2]
  }
  Test Case 18
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [26]
  }
  Test Case 19
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 25, 22, 6, -1, 8, 10]
  }
  Test Case 20
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 26, 22, 8]
  }
  Test Case 21
  {
    "array": [1, 1, 6, 1],
    "sequence": [1, 1, 1, 6]
  }
  Test Case 22
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, 10, 11, 11, 11, 11]
  }
  Test Case 23
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [5, 1, 22, 25, 6, -1, 8, 10, 10]
  }
  Test Case 24
  {
    "array": [5, 1, 22, 25, 6, -1, 8, 10],
    "sequence": [1, 6, -1, 5]
  }

*/

// Solution 1 | O(n) time | O(1) space
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

// Solution 2 | O(n) time | O(1) space
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
