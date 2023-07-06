/*
  Move Element To End
  You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

  The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.

  Sample Input
  array = [2, 1, 2, 2, 2, 3, 4, 2]
  toMove = 2
  Sample Output
  [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently
*/ 

/*
  Test Case 1
  {
    "array": [2, 1, 2, 2, 2, 3, 4, 2],
    "toMove": 2
  }
  Test Case 2
  {
    "array": [],
    "toMove": 3
  }
  Test Case 3
  {
    "array": [1, 2, 4, 5, 6],
    "toMove": 3
  }
  Test Case 4
  {
    "array": [3, 3, 3, 3, 3],
    "toMove": 3
  }
  Test Case 5
  {
    "array": [3, 1, 2, 4, 5],
    "toMove": 3
  }
  Test Case 6
  {
    "array": [1, 2, 4, 5, 3],
    "toMove": 3
  }
  Test Case 7
  {
    "array": [1, 2, 3, 4, 5],
    "toMove": 3
  }
  Test Case 8
  {
    "array": [2, 4, 2, 5, 6, 2, 2],
    "toMove": 2
  }
  Test Case 9
  {
    "array": [5, 5, 5, 5, 5, 5, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
    "toMove": 5
  }
  Test Case 10
  {
    "array": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 5, 5, 5, 5, 5, 5],
    "toMove": 5
  }
  Test Case 11
  {
    "array": [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12],
    "toMove": 5
  }
*/

// Solution 1 | Time O(n) | Space O(n) | using two arrays
function moveElementToEndS1(array, toMove) {
  const sameItem = []; // Initialize an empty array to store elements equal to toMove.
  const otherItem = []; // Initialize an empty array to store elements not equal to toMove.

  for(let item of array){ // Iterate over each element in the input array.
    if(item === toMove){ // If the current element is equal to toMove,
      sameItem.push(item); // Add it to the sameItem array.
    } else { // Otherwise, if the current element is not equal to toMove,
      otherItem.push(item); // Add it to the otherItem array.
    }
  }

  return [...otherItem, ...sameItem]; // Merge the otherItem and sameItem arrays using the spread operator and return the result.
}


// Solution 2 | Time O(n) | Space O(1) | Two Pointers
function moveElementToEndS2(array, toMove) {
  let left = 0; // Initialize a left pointer at the beginning of the array.
  let right = array.length - 1; // Initialize a right pointer at the end of the array.

  while (left < right) { // Iterate until the left pointer crosses the right pointer.
    if (array[right] === toMove) { // If the element at the right pointer is equal to toMove,
      right--; // Decrement the right pointer to skip that element.
    } else { // Otherwise, if the element at the right pointer is not equal to toMove,
      if (array[left] === toMove) { // Check if the element at the left pointer is equal to toMove
        swap(left, right, array); // If it is, swap the element at the left pointer with the one at the right pointer.
      }
      left++; // Increment the left pointer to move towards the middle of the array.
    }
  }

  return array; // Return the modified array.
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]]; // Swap the elements at indices i and j in the given array using array destructuring assignment.
}