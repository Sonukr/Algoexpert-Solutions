/*
  Sorted Squared Array
  Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

  Sample Input
  array = [1, 2, 3, 5, 6, 8, 9]
  Sample Output
  [1, 4, 9, 25, 36, 64, 81]

*/ 

/* 
  Test Case 1
  {
    "array": [1, 2, 3, 5, 6, 8, 9]
  }
  Test Case 2
  {
    "array": [1]
  }
  Test Case 3
  {
    "array": [1, 2]
  }
  Test Case 4
  {
    "array": [1, 2, 3, 4, 5]
  }
  Test Case 5
  {
    "array": [0]
  }
  Test Case 6
  {
    "array": [10]
  }
  Test Case 7
  {
    "array": [-1]
  }
  Test Case 8
  {
    "array": [-2, -1]
  }
  Test Case 9
  {
    "array": [-5, -4, -3, -2, -1]
  }
  Test Case 10
  {
    "array": [-10]
  }
  Test Case 11
  {
    "array": [-10, -5, 0, 5, 10]
  }
  Test Case 12
  {
    "array": [-7, -3, 1, 9, 22, 30]
  }
  Test Case 13
  {
    "array": [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
  }
  Test Case 14
  {
    "array": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
  Test Case 15
  {
    "array": [-1, -1, 2, 3, 3, 3, 4]
  }
  Test Case 16
  {
    "array": [-3, -2, -1]
  }
  Test Case 17
  {
    "array": [-3, -2, -1]
  }
*/

// Solution 1 | O(nlog(n)) time | O(n) space
function sortedSquaredArrayS1(array) {
  // Write your code here.
  // Create an array to store the squared elements
  const resp = [];

  // Sort the input array in ascending order of absolute values
  array.sort((a, b) => Math.abs(a) - Math.abs(b));

  // Iterate over each element in the sorted array
  for (const item of array) {
    // Square each element and push the result to the response array
    resp.push(item * item);
  }

  // Return the sorted array of squared elements
  return resp;
}


// Solution 2 | O(n) time | O(n) space
function sortedSquaredArrayS2(array) {
  // Write your code here.
  // Create a new array with the same length as the input array to store the squared elements
  const sortedSquares = new Array(array.length).fill(0);
  
  // Iterate over each index of the input array
  for (let idx = 0; idx < array.length; idx++) {
    // Get the value at the current index
    const value = array[idx];
    // Square the value and assign it to the corresponding index in the sortedSquares array
    sortedSquares[idx] = value * value;
  }

  // Sort the squared elements in ascending order
  sortedSquares.sort((a, b) => a - b);
  
  // Return the sorted array of squared elements
  return sortedSquares;
}