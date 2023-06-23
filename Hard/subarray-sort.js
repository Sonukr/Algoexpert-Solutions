/*
  Subarray Sort
  Write a function that takes in an array of at least two integers and that returns an array of the starting and ending indices of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted (in ascending order).

  If the input array is already sorted, the function should return [-1, -1].

  Sample Input
  array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
  Sample Output
  [3, 9]
*/

/* 
  Test Case 1
  {
    "array": [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
  }
  Test Case 2
  {
    "array": [1, 2]
  }
  Test Case 3
  {
    "array": [2, 1]
  }
  Test Case 4
  {
    "array": [1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19]
  }
  Test Case 5
  {
    "array": [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19]
  }
  Test Case 6
  {
    "array": [1, 2, 8, 4, 5]
  }
  Test Case 7
  {
    "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]
  }
  Test Case 8
  {
    "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]
  }
  Test Case 9
  {
    "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57]
  }
  Test Case 10
  {
    "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7]
  }
  Test Case 11
  {
    "array": [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11]
  }
  Test Case 12
  {
    "array": [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19]
  }
  Test Case 13
  {
    "array": [1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55]
  }
  Test Case 14
  {
    "array": [1, 2, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  }
  Test Case 15
  {
    "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2]
  }
  Test Case 16
  {
    "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  }
  Test Case 17
  {
    "array": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  }

*/ 

// Solution 1 | Complexity: O(n) time | O(1) space
function subarraySort(array) {
  // Write your code here. // Initialize variables to track the minimum and maximum elements that are out of order
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  // Iterate through the array to find the minimum and maximum out-of-order elements
  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    // Check if the current element is out of order by comparing it with its neighboring elements
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }

  // If the array is already sorted, return [-1, -1]
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }

  // Find the correct positions of the minimum and maximum out-of-order elements
  let startIndex = 0;
  while (minOutOfOrder >= array[startIndex]) {
    startIndex++;
  }

  let endIndex = array.length - 1;
  while (maxOutOfOrder <= array[endIndex]) {
    endIndex--;
  }

  // Return the starting and ending indices of the smallest subarray that needs to be sorted
  return [startIndex, endIndex];
}

// Helper function to check if an element is out of order
function isOutOfOrder(i, num, array) {
  if (i === 0) {
    return num > array[i + 1];
  }
  if (i === array.length - 1) {
    return num < array[i - 1];
  }
  return num > array[i + 1] || num < array[i - 1];
}
