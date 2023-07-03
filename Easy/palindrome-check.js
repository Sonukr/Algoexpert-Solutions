/* 
  Palindrome Check
  Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.

  A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

  Sample Input
  string = "abcdcba"
  Sample Output
  true // it's written the same forward and backward

*/

/**
  Test Case 1
  {
    "string": "abcdcba"
  }
  Test Case 2
  {
    "string": "a"
  }
  Test Case 3
  {
    "string": "ab"
  }
  Test Case 4
  {
    "string": "aba"
  }
  Test Case 5
  {
    "string": "abb"
  }
  Test Case 6
  {
    "string": "abba"
  }
  Test Case 7
  {
    "string": "abcdefghhgfedcba"
  }
  Test Case 8
  {
    "string": "abcdefghihgfedcba"
  }
  Test Case 9
  {
    "string": "abcdefghihgfeddcba"
  }
*/ 

// Solution1 | Time O(n) | Space O(1)

function isPalindromeS1(string) {
  // Write your code here.
  return string === string.split('').reverse().join('')
}

// Solution2 | Time O(n) | Space O(1)
function isPalindromeS2(string) {
  // Write your code here.
  let rev = '';
  for(let char of string){
    rev = char + rev;
  }
  return string === rev;
}