/* 
  Two Number Sum
  Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
  Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
  You can assume that there will be at most one pair of numbers summing up to the target sum.

  Sample Input
  array = [3, 5, -4, 8, 11, 1, -1, 6]
  targetSum = 10

  Sample Output
  [-1, 11] // the numbers could be in reverse order
*/

/* 
Test Case 1
{ "array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 10 }

Test Case 2
{ "array": [4, 6], "targetSum": 10 }

Test Case 3
{ "array": [4, 6, 1], "targetSum": 5 }

Test Case 4
{ "array": [4, 6, 1, -3], "targetSum": 3 }

Test Case 5
{ "array": [1, 2, 3, 4, 5, 6, 7, 8, 9], "targetSum": 17 }

Test Case 6
{ "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 15], "targetSum": 18 }

Test Case 7
{"array": [-7, -5, -3, -1, 0, 1, 3, 5, 7], "targetSum": -5 }

Test Case 8
{ "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], "targetSum": 163 }

Test Case 9
{ "array": [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], "targetSum": 164 }

Test Case 10
{ "array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 15 }

Test Case 11
{ "array": [14], "targetSum": 15 }

Test Case 12
{ "array": [15], "targetSum": 15 }

*/  

// Solution 1
function twoNumberSumS1(array, targetSum) {
  // Write your code here.
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j];
      if (num1 + num2 === targetSum) {
        finalArray.push(num1, num2);
      }
    }
  }
  return finalArray;
};

// Solution 2
function twoNumberSumS2(array, targetSum) {
  // Write your code here.
  // Create an empty set
  const set = new Set();
  for(let number of array){
    // This is the number which will sum up the target when added to the current number
    const firstNumber = targetSum - number;
    // If firstNumber is in set, then we have a pair summing up to the target
    if(set.has(firstNumber)){
        return [firstNumber, number ]
    }
    // If not, then add it into the set to keep track
    set.add(number);
  }
  return [];
}


