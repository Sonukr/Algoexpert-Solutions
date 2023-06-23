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

function fourNumberSum(array, targetSum) {
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


