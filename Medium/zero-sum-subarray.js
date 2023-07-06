/*
  Zero Sum Subarray
  You're given a list of integers nums. Write a function that returns a boolean representing whether there exists a zero-sum subarray of nums.

  A zero-sum subarray is any subarray where all of the values add up to zero. A subarray is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element and as long as the original array.

  Sample Input
  nums = [-5, -5, 2, 3, -2]
  Sample Output
  True // The subarray [-5, 2, 3] has a sum of 0

*/

/*
  Test Case 1
  {
    "nums": []
  }
  Test Case 2
  {
    "nums": [0]
  }
  Test Case 3
  {
    "nums": [1]
  }
  Test Case 4
  {
    "nums": [1, 2, 3]
  }
  Test Case 5
  {
    "nums": [1, 1, 1]
  }
  Test Case 6
  {
    "nums": [-1, -1, -1]
  }
  Test Case 7
  {
    "nums": [0, 0, 0]
  }
  Test Case 8
  {
    "nums": [1, 2, -2, 3]
  }
  Test Case 9
  {
    "nums": [2, -2]
  }
  Test Case 10
  {
    "nums": [-1, 2, 3, 4, -5, -3, 1, 2]
  }
  Test Case 11
  {
    "nums": [-2, -3, -1, 2, 3, 4, -5, -3, 1, 2]
  }
  Test Case 12
  {
    "nums": [2, 3, 4, -5, -3, 4, 5]
  }
  Test Case 13
  {
    "nums": [2, 3, 4, -5, -3, 5, 5]
  }
  Test Case 14
  {
    "nums": [1, 2, 3, 4, 0, 5, 6, 7]
  }
  Test Case 15
  {
    "nums": [1, 2, 3, -2, -1]
  }
  Test Case 16
  {
    "nums": [-8, -22, 104, 73, -120, 53, 22, -12, 1, 14, -90, 13, -22]
  }
  Test Case 17
  {
    "nums": [-8, -22, 104, 73, -120, 53, 22, 20, 25, -12, 1, 14, -90, 13, -22]
  }

*/

// Solution1 | Time O(n) | Space O(n) | Hash Table
function zeroSumSubarrayS1(nums) {
  let sum = 0;
  let map = {0: true}; // Create a map with initial value of 0 as true to handle single-element array case
  for (const element of nums) { // Loop through each element in the input array
    sum += element; // Calculate the running sum by adding the current element
    
    if (map[sum]) { // If the current sum has been encountered before, there is a subarray with zero sum
      return true; // Return true and exit the function
    }
    
    map[sum] = true; // Add the current sum to the map to keep track of encountered sums
  }
  
  return false; // If there is no subarray with zero sum, return false
}

// Solution2 | Time O(n) | Space O(n) | Using Map with get() and set() methods 
function zeroSumSubarrayS2(nums) {
  let sum = 0;
  const map = new Map(); // Create a new Map object to store encountered sums (key) and their presence (value)
  let subArray = []; // Initialize an empty array to store the subarray
  
  for (const element of nums) { // Loop through each element in the input array
    sum += element; // Calculate the running sum by adding the current element
    
    if (element === 0 || sum === 0 || map.has(sum)) {
      const startIndex = map.get(sum) + 1; // Get the start index of the subarray
      const endIndex = i; // Get the end index of the subarray
      subArray = nums.slice(startIndex, endIndex + 1); // Extract the subarray using slice method

       // If the current element is 0 or 
       // the current sum is 0 or 
       // the current sum has been encountered before,
      // return { hasZeroSumSubarray: true, subArray }; // Return an object with hasZeroSumSubarray set to true and the subarray
      console.log({ hasZeroSumSubarray: true, subArray });
      return true; // Return true and exit the function
    }
    
    map.set(sum, true); // Add the current sum to the map to keep track of encountered sums
  }
  console.log({ hasZeroSumSubarray: false, subArray });
  return false; // If there is no subarray with zero sum, return false
}

