/*
  Three Number Sum
  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

  If no three numbers sum up to the target sum, the function should return an empty array.

  Sample Input
  array = [12, 3, 1, 2, -6, 5, -8, 6]
  targetSum = 0

  Sample Output
  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

*/

/*
Test Case 1
{ "array": [12, 3, 1, 2, -6, 5, -8, 6], "targetSum": 0 }

Test Case 2
{ "array": [1, 2, 3], "targetSum": 6 }

Test Case 3
{ "array": [1, 2, 3], "targetSum":  7 }

Test Case 4
{ "array": [8, 10, -2, 49, 14], "targetSum": 57 }

Test Case 5
{ "array": [12, 3, 1, 2, -6, 5, 0, -8, -1], "targetSum": 0 }

Test Case 6
{ "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6], "targetSum": 0 }

Test Case 7
{ "array": [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], "targetSum": 0 }

Test Case 8
{ "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 18 }

Test Case 9
{ "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 32 }

Test Case 10
{ "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 33 }

Test Case 11
{ "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 5 }
*/

// Solution 1 using two pointers | O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  // Write your code here.
  const res = []
	array.sort((a, b) => a - b)
	for (let i = 0; i < array.length - 2; i++) {
		const number = array[i]
		let left = i + 1
		let right = array.length - 1
		while (left !== right) {
			const sum = number + array[left] + array[right]
			if (sum > targetSum) right--
			else if (sum < targetSum) left++
			else {
				res.push([number, array[left], array[right]])
				left++
			}
		}
	}
	return res
}
