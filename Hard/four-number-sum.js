/* 
  Four Number Sum
  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all quadruplets in the array that sum up to the target sum and return a two-dimensional array of all these quadruplets in no particular order.

  If no four numbers sum up to the target sum, the function should return an empty array.

  Sample Input
  array = [7, 6, 4, -1, 1, 2]
  targetSum = 16
  Sample Output
  [[7, 6, 4, -1], [7, 6, 1, 2]] // the quadruplets could be ordered differently

*/

/* 
Test Case 1
{
  "array": [7, 6, 4, -1, 1, 2],
  "targetSum": 16
}
Test Case 2
{
  "array": [1, 2, 3, 4, 5, 6, 7],
  "targetSum": 10
}
Test Case 3
{
  "array": [5, -5, -2, 2, 3, -3],
  "targetSum": 0
}
Test Case 4
{
  "array": [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  "targetSum": 4
}
Test Case 5
{
  "array": [-1, 22, 18, 4, 7, 11, 2, -5, -3],
  "targetSum": 30
}
Test Case 6
{
  "array": [-10, -3, -5, 2, 15, -7, 28, -6, 12, 8, 11, 5],
  "targetSum": 20
}
Test Case 7
{
  "array": [1, 2, 3, 4, 5],
  "targetSum": 100
}
Test Case 8
{
  "array": [1, 2, 3, 4, 5, -5, 6, -6],
  "targetSum": 5
}
*/

function fourNumberSumS1(array, targetSum) {
  // Write your code here.
  const quadruplets = []; // Initialize an empty array to store the quadruplets
  array.sort((a, b) => a - b); // Sort the array in ascending order

  // Iterate through pairs of elements in the array
  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length - 2; j++) {
      let left = j + 1; // Initialize a pointer at the element next to j
      let right = array.length - 1; // Initialize a pointer at the last element

      // Use two pointers to find the remaining two elements that sum up to the target
      while (left < right) {
        const currentSum = array[i] + array[j] + array[left] + array[right];

        if (currentSum === targetSum) {
          // If the current sum equals the target sum, add the quadruplet to the array
          quadruplets.push([array[i], array[j], array[left], array[right]]);
          left++; // Move the left pointer to the next element
          right--; // Move the right pointer to the previous element
        } else if (currentSum < targetSum) {
          // If the current sum is less than the target sum, move the left pointer to the next element
          left++;
        } else {
          // If the current sum is greater than the target sum, move the right pointer to the previous element
          right--;
        }
      }
    }
  }

  return quadruplets; // Return the array of quadruplets
}


// Solution 2 using hash map
function fourNumberSumS2(array, targetSum) {
  const pairs = {}; // Create an empty hash map to store pairs of two numbers and their sums
  const quadruplets = []; // Initialize an empty array to store the quadruplets

  // Iterate through each pair of numbers and store their sums in the hash map
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = targetSum - currentSum;

      if (difference in pairs) {
        // If the difference exists in the hash map, it means we have found a quadruplet
        for (const pair of pairs[difference]) {
          quadruplets.push([...pair, array[i], array[j]]);
        }
      }
    }
    // Store the current number and its sum with other numbers in the hash map
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];

      if (currentSum in pairs) {
        pairs[currentSum].push([array[k], array[i]]);
      } else {
        pairs[currentSum] = [[array[k], array[i]]];
      }
    }
  }

  return quadruplets; // Return the array of quadruplets

}


// Solution 3 using recursion
function fourNumberSum(array, targetSum) {
  // Recursive function to find all quadruplets
  const fourNumberSumFunc = (array, targetSum, numCount = 0, currentSum = 0, currentQuadruplet = [], quadruplets = []) => {
    // Base case: when numCount reaches 4
    if (numCount === 4) {
      // Check if the currentSum equals the targetSum
      if (currentSum === targetSum) {
        // Add a copy of the currentQuadruplet to the quadruplets array
        quadruplets.push(currentQuadruplet.slice());
      }
      // Return the quadruplets array
      return quadruplets;
    }

    // Iterate over the elements of the array
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      // Add the current element to the currentQuadruplet
      currentQuadruplet.push(num);
      // Recursively call the function with the remaining elements,
      // updated numCount, currentSum, currentQuadruplet, and quadruplets
      fourNumberSumFunc(array.slice(i + 1), targetSum, numCount + 1, currentSum + num, currentQuadruplet, quadruplets);
      // Remove the last element from the currentQuadruplet to backtrack
      currentQuadruplet.pop();
    }

    // Return the quadruplets array
    return quadruplets;
  }

  // Call the fourNumberSumFunc with the initial parameters
  return fourNumberSumFunc(array, targetSum);
}

