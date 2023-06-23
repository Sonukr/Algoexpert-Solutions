/* 
  Nth Fibonacci
  The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.

  Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1. For the purpose of this question, the first Fibonacci number is F0; therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

  Sample Input #1
  n = 2
  Sample Output #1
  1 // 0, 1
  Sample Input #2
  n = 6
  Sample Output #2
  5 // 0, 1, 1, 2, 3, 5
*/

/**
  Test Case 1 { "n": 6 }
  Test Case 2 { "n": 1 }
  Test Case 3 { "n": 2 }
  Test Case 4 { "n": 3 }
  Test Case 5 { "n": 4 }
  Test Case 6 { "n": 5 }
  Test Case 7 { "n": 6 }
  Test Case 8 { "n": 7 }
  Test Case 9 { "n": 8 }
  Test Case 9 { "n": 9 }
  Test Case 10 { "n": 10 }
  Test Case 11 { "n": 11 }
  Test Case 12 { "n": 12 }
  Test Case 13 { "n": 13 }
  Test Case 14 { "n": 14 }
  Test Case 15 { "n": 15 }
  Test Case 16 { "n": 16 }
  Test Case 17 { "n": 17 }
  Test Case 18 { "n": 18 }
  Test Case 19 { "n": 19 }
  Test Case 20 { "n": 20 }
*/

// Solution 1

function getNthFibS1(n) {
  // Write your code here.
  let fibA = [0,1];
  for(let i=2; i<=n; i++){
    fibA.push(fibA[i-1]+fibA[i-2])
  }
  return fibA[n-1]
}

// Solution 2 Using for loop with destructuring assignment
function getNthFibS2(n) {
  // Write your code here.
  if(n===1) return 0;
  let [a,b] = [0,1];
  for(let i=2; i<n; i++){
    [a,b] = [b,a+b]
  }
  return b
}