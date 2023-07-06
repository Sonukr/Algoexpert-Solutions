/*

  Majority Element
  Write a function that takes in a non-empty, unordered array of positive integers and returns the array's majority element without sorting the array and without using more than constant space.

  An array's majority element is an element of the array that appears in over half of its indices. Note that the most common element of an array (the element that appears the most times in the array) isn't necessarily the array's majority element; for example, the arrays [3, 2, 2, 1] and [3, 4, 2, 2, 1] both have 2 as their most common element, yet neither of these arrays have a majority element, because neither 2 nor any other element appears in over half of the respective arrays' indices.

  You can assume that the input array will always have a majority element.

  Sample Input
  array = [1, 2, 3, 2, 2, 1, 2]
  Sample Output
  2 // 2 occurs in 4/7 array indices, making it the majority element

*/

/* 

  Test Case 1
  {
    "array": [2]
  }
  Test Case 2
  {
    "array": [1, 2, 1]
  }
  Test Case 3
  {
    "array": [3, 3, 1]
  }
  Test Case 4
  {
    "array": [4, 5, 5]
  }
  Test Case 5
  {
    "array": [1, 2, 3, 2, 2, 1, 2]
  }
  Test Case 6
  {
    "array": [1, 2, 3, 2, 3, 2, 2, 4, 2]
  }
  Test Case 7
  {
    "array": [1, 1, 1, 1, 1, 1, 1]
  }
  Test Case 8
  {
    "array": [5, 4, 3, 2, 1, 1, 1, 1, 1]
  }
  Test Case 9
  {
    "array": [1, 1, 1, 1, 1, 5, 4, 3, 2]
  }
  Test Case 10
  {
    "array": [1, 1, 1, 1, 2, 2, 2, 2, 2]
  }
  Test Case 11
  {
    "array": [435, 6543, 6543, 435, 535, 6543, 6543, 12, 43, 6543, 6543]
  }
  Test Case 12
  {
    "array": [1, 2, 2, 2, 1]
  }
  Test Case 13
  {
    "array": [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2, 1]
  }
  Test Case 14
  {
    "array": [1, 2, 3, 2, 2, 4, 2, 2, 5, 2, 1]
  }

*/ 

// Solution 1 | O(n) time | O(n) space

/**
 * Function to find the majority element in an array using a hash map.
 *
 * @param {number[]} array - The input array.
 * @returns {number} - The majority element.
 */
function majorityElementS1(array) {
  let map = {}; // Object to store count of occurrences for each element

  // Iterate through each element in the array
  for (const element of array) {
    if (map[element]) { // If the current element has been encountered before, increase its count
      map[element.toString()] = map[element] + 1;
    } else { // If the current element has not been encountered before, set its count to 1
      map[element.toString()] = 1;
    }
  }

  let max = 0; // Variable to store the maximum count
  let maxKey = ""; // Variable to store the key with the maximum count

  // Iterate through each key in the map
  for (let key in map) {
    if (map[key] > max) { // If the count of the current key is greater than the maximum count
      max = map[key]; // Update the maximum count
      maxKey = key; // Update the key with the maximum count
    }
  }

  console.log(map, max, maxKey);

  return parseInt(maxKey); // Return the majority element
}


// Solution 2 | Time O(n) | Space O(1) | Boyer-Moore Voting Algorithm

/**
 * Function to find the majority element in an array using the Boyer-Moore Voting Algorithm.
 *
 * @param {number[]} array - The input array.
 * @returns {number} - The majority element.
 */
function majorityElementS2(array) {
  let majority = null; // Variable to store the majority element
  let count = 0; // Variable to store the count of the current element

  // Iterate through each element in the array
  for (const element of array) {
    if (count === 0) { // If the count is zero, set the current element as the potential majority element
      majority = element;
      count++;
    } else if (element === majority) { // If the current element is equal to the potential majority element, increase the count
      count++;
    } else { // If the current element is different from the potential majority element, decrease the count
      count--;
    }
  }

  return majority; // Return the majority element
}
