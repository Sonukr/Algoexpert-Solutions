/*
  Semordnilap
  Write a function that takes in a list of unique strings and returns a list of semordnilap pairs.

  A semordnilap pair is defined as a set of different strings where the reverse of one word is the same as the forward version of the other. For example the words "diaper" and "repaid" are a semordnilap pair, as are the words "palindromes" and "semordnilap".

  The order of the returned pairs and the order of the strings within each pair does not matter.

  Sample Input
  words = ["diaper", "abc", "test", "cba", "repaid"]
  Sample Output
  [["diaper", "repaid"], ["abc", "cba"]]

*/

/*
  Test Case 1
  {
    "words": []
  }
  Test Case 2
  {
    "words": ["aaa", "bbbb"]
  }
  Test Case 3
  {
    "words": ["dog", "god"]
  }
  Test Case 4
  {
    "words": ["dog", "hello", "god"]
  }
  Test Case 5
  {
    "words": ["dog", "desserts", "god", "stressed"]
  }
  Test Case 6
  {
    "words": ["dog", "hello", "desserts", "test", "god", "stressed"]
  }
  Test Case 7
  {
    "words": ["abcde", "edcba", "edbc", "edb", "cbde", "abc"]
  }
  Test Case 8
  {
    "words": ["abcde", "bcd", "dcb", "edcba", "aaa"]
  }
  Test Case 9
  {
    "words": ["abcdefghijk", "aaa", "hello", "racecar", "kjihgfedcba"]
  }
  Test Case 10
  {
    "words": ["liver", "dog", "hello", "desserts", "evil", "test", "god", "stressed", "racecar", "palindromes", "semordnilap", "abcd", "live"]
  }
*/


// Solution1 | Time O(n) | Space O(n)
// This function finds and returns pairs of words that are semordnilaps (reversals of each other) in a given array of words.

function semordnilapS1(words) {
  const wordSet = new Set(); // Create an empty Set to store unique words.
  const pairs = []; // Create an empty array to store the pairs of semordnilaps.

  // Iterate through each word in the given array of words.
  for (const word of words) {
    const rev = word.split('').reverse().join(""); // Reverse the current word by splitting it into an array of characters, reversing the array, and then joining the characters back into a string.
    
    // If the reversed word already exists in the wordSet, it means there is a pair of semordnilaps.
    if (wordSet.has(rev)) {
      pairs.push([word, rev]); // Add the pair [word, reversedWord] to the pairs array.
    } else {
      wordSet.add(word); // Otherwise, add the current word to the wordSet.
    }
  }
  // Return the array of pairs of semordnilaps.
  return pairs;
}



// Solution2 | Time O(n^2) | Space O(n)
// This code contains two functions: checkPalindrome and semordnilapS2.

// The checkPalindrome function checks if a given string is a palindrome.
function checkPalindrome(str) {
  let i = 0; // Initialize a variable i to point to the first character of the string.
  let j = str.length - 1; // Initialize a variable j to point to the last character of the string.

  // Loop through the string while i is less than j.
  while (i < j) {
    // If the characters at positions i and j are not equal, return false (not a palindrome).
    if (str[i] !== str[j]) {
      return false;
    }
    i++; // Move i to the next character.
    j--; // Move j to the previous character.
  }

  // If the loop completes without returning false, it means the string is a palindrome, so return true.
  return true;
}

// The semordnilapS2 function finds and returns pairs of words that are semordnilaps in a given array of words.
function semordnilapS2(inputArr) {
  let length = inputArr.length; // Get the length of the input array.
  const resultArr = []; // Create an empty array to store the pairs of semordnilaps.

  // Iterate through each word in the input array using a nested loop.
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      // For each pair of words (inputArr[i], inputArr[j]), check if their concatenation is a palindrome.
      if (checkPalindrome(inputArr[i] + inputArr[j])) {
        resultArr.push([inputArr[i], inputArr[j]]); // If it is a palindrome, add the pair [inputArr[i], inputArr[j]] to the result array.
      }
    }
  }

  // Return the array of pairs of semordnilaps.
  return resultArr;
}
