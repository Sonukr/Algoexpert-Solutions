/*
  First Non-Repeating Character
  Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.

  The first non-repeating character is the first character in a string that occurs only once.

  If the input string doesn't have any non-repeating characters, your function should return -1.

  Sample Input
  string = "abcdcaf"
  Sample Output
  1 // The first non-repeating character is "b" and is found at index 1.

*/

/*
  Test Case 1
  {
    "string": "abcdcaf"
  }
  Test Case 2
  {
    "string": "faadabcbbebdf"
  }
  Test Case 3
  {
    "string": "a"
  }
  Test Case 4
  {
    "string": "ab"
  }
  Test Case 5
  {
    "string": "abc"
  }
  Test Case 6
  {
    "string": "abac"
  }
  Test Case 7
  {
    "string": "ababac"
  }
  Test Case 8
  {
    "string": "ababacc"
  }
  Test Case 9
  {
    "string": "lmnopqldsafmnopqsa"
  }
  Test Case 10
  {
    "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy"
  }
  Test Case 11
  {
    "string": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  }
  Test Case 12
  {
    "string": ""
  }
  Test Case 13
  {
    "string": "ggyllaylacrhdzedddjsc"
  }
  Test Case 14
  {
    "string": "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh"
  }
  Test Case 15
  {
    "string": "aabbccddeeff"
  }
*/

// Solution 1 | Time O(n) | Space O(1)
// This function finds the index of the first non-repeating character in a given string.

function firstNonRepeatingCharacterS1(string) {
  const map = {};

  // Iterate through each character of the string.
  for (let char of string) {
    if (!map[char]) {
      // If the character doesn't exist in the map, initialize its count to 0.
      map[char] = 0;
    }
    
    // Increment the count of the character.
    map[char] += 1;
  }

  // Iterate through each key-value pair in the map using `Object.entries()`.
  for (const [key, value] of Object.entries(map)) {
    if (value === 1) {
      // If the count of the character is 1, it means it is non-repeating.
      // Return the index of the character's first occurrence in the string.
      return string.indexOf(key);
    }
  }

  // If there are no non-repeating characters, return -1.
  return -1;
}


// Solution 2 | Time O(n) | Space O(1)
// This function finds the index of the first non-repeating character in a given string.

function firstNonRepeatingCharacterS2(string) {
  const arrOfChars = string.split(''); 
  // Use the `findIndex()` method on the array of characters to find the index of the first element that satisfies the provided testing function.
  // The testing function compares the index of each character's first occurrence (`arrOfChars.findIndex(y => y === x)`) with the index of its last occurrence (`arrOfChars.lastIndexOf(x)`).
  // If the indexes are the same, it means the character is non-repeating.
  // Return the index of the character's first occurrence in the original string.
  const Index = string.split('').findIndex((x, i) => {
    return arrOfChars.findIndex(y => y === x) === arrOfChars.lastIndexOf(x);
  });

  // Return the index of the first non-repeating character, or -1 if no non-repeating character is found.
  return Index;
}

