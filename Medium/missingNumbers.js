/*
  Missing Numbers
  You're given an unordered list of unique integers nums in the range [1, n], where n represents the length of nums + 2. This means that two numbers in this range are missing from the list.

  Write a function that takes in this list and returns a new list with the two missing numbers, sorted numerically.

  Sample Input
  nums = [1, 4, 3]
  Sample Output
  [2, 5]  // n is 5, meaning the completed list should be [1, 2, 3, 4, 5]

*/ 

/*
  Test Case 1
  {
    "nums": []
  }
  Test Case 2
  {
    "nums": [1]
  }
  Test Case 3
  {
    "nums": [2]
  }
  Test Case 4
  {
    "nums": [3]
  }
  Test Case 5
  {
    "nums": [1, 3]
  }
  Test Case 6
  {
    "nums": [3, 1]
  }
  Test Case 7
  {
    "nums": [1, 2, 3]
  }
  Test Case 8
  {
    "nums": [3, 2, 1]
  }
  Test Case 9
  {
    "nums": [3, 1, 2]
  }
  Test Case 10
  {
    "nums": [3, 4, 5]
  }
  Test Case 11
  {
    "nums": [4, 5, 3]
  }
  Test Case 12
  {
    "nums": [1, 3, 4, 5]
  }
  Test Case 13
  {
    "nums": [4, 5, 1, 3]
  }
  Test Case 14
  {
    "nums": [1, 2, 4, 5, 7]
  }
  Test Case 15
  {
    "nums": [1, 2, 7, 5, 4]
  }
  Test Case 16
  {
    "nums": [1, 2, 3, 4, 5, 6, 7]
  }
  Test Case 17
  {
    "nums": [7, 6, 5, 4, 3, 2, 1]
  }
  Test Case 18
  {
    "nums": [3, 5, 1, 2, 4, 7, 6]
  }
  Test Case 19
  {
    "nums": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22]
  }
  Test Case 20
  {
    "nums": [3, 5, 7, 8, 1, 10, 11, 2, 4, 13, 17, 22, 18, 21, 16, 20, 6, 9, 15, 12]
  }
  Test Case 21
  {
    "nums": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  }
  Test Case 22
  {
    "nums": [14, 15, 16, 17, 18, 19, 20, 21, 22, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  }
  Test Case 23
  {
    "nums": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
  }
  Test Case 24
  {
    "nums": [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
*/ 

// Solution 1 | O(n) Time | O(n) Space 
function missingNumbersS1(nums) {
  const n = nums.length + 2;
  const finalArray = [];

  // Iterate from 1 to n.
  for (let i = 1; i <= n; i++) {
    // Check if the current number is not found in the nums array.
    if (!(nums.indexOf(i) >= 0)) {
      // If the number is missing, push it into the finalArray.
      finalArray.push(i);
    }
  }

  return finalArray;
}

// Solution 2 | O(n) Time | O(n) Space
function missingNumbersS2(nums) {
  const n = nums.length + 2;
  const numSet = new Set(nums); // Create a Set to store the numbers in the input array.
  const finalArray = [];

  // Iterate from 1 to n.
  for (let i = 1; i <= n; i++) {
    // Check if the current number is missing from the Set.
    if (!numSet.has(i)) {
      // If the number is missing, push it into the finalArray.
      finalArray.push(i);
    }
  }

  return finalArray;
}

// Solution 3 | O(n) Time | O(1) Space with mutation of input array
function missingNumbersS3(nums) {
  const n = nums.length + 2;

  // Iterate from 1 to n.
  for (let i = 1; i <= n; i++) {
    // Check if the current number is missing from the input array.
    if (!nums.includes(i)) {
      // If the number is missing, add it to the nums array.
      nums.push(i);
    }
  }

  // Return the last two elements of the nums array, which are the missing numbers.
  return nums.slice(nums.length - 2);
}


// Solution 4 | O(n) Time | O(1) Space without mutation of input array
function missingNumbersS4(nums) {
  const n = nums.length + 2;
  let missingNumber1;
  let missingNumber2;

  // Iterate from 1 to n.
  for (let i = 1; i <= n; i++) {
    // Check if the current number is missing from the input array.
    if (!nums.includes(i)) {
      // If the first missing number has not been found yet, assign it to missingNumber1.
      if (!missingNumber1) {
        missingNumber1 = i;
      }
      // If the first missing number has been found but the second one hasn't, assign it to missingNumber2.
      else if (!missingNumber2) {
        missingNumber2 = i;
      }
      // If both missing numbers have been found, break out of the loop.
      else {
        break;
      }
    }
  }

  // Return the two missing numbers as an array.
  return [missingNumber1, missingNumber2];
}
