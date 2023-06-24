/*
Common Characters
Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity.

Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order.

Sample Input
strings = ["abc", "bcd", "cbaccd"]
Sample Output
["b", "c"] // The characters could be ordered differently.
*/

/* 

Test Case 1
{
  "strings": ["abc", "bcd", "cbad"]
}
Test Case 2
{
  "strings": ["a"]
}
Test Case 3
{
  "strings": ["a", "b", "c"]
}
Test Case 4
{
  "strings": ["aa", "aa"]
}
Test Case 5
{
  "strings": ["aaaa", "a"]
}
Test Case 6
{
  "strings": ["abcde", "aa", "foobar", "foobaz", "and this is a string", "aaaaaaaa", "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeea"]
}
Test Case 7
{
  "strings": ["abcdef", "fedcba", "abcefd", "aefbcd", "efadbc", "effffffffffffbcda", "eeeeeffffffbbbbbaaaaaccccdddd", "**************abdcef************"]
}
Test Case 8
{
  "strings": ["ab&cdef!", "f!ed&cba", "a&bce!d", "ae&fb!cd", "efa&!dbc", "eff!&fff&fffffffbcda", "eeee!efff&fffbbbbbaaaaaccccdddd", "*******!***&****abdcef************", "*******!***&****a***********f*", "*******!***&****b***********c*"]
}
Test Case 9
{
  "strings": ["*abcd", "def*", "******d*****"]
}
Test Case 10
{
  "strings": ["*abc!d", "de!f*", "**!!!****d*****"]
}
*/

// Solution 1 | O(n^2) time | O(n) space
function commonCharacters(strings) {
  // Write your code here.
 // Create a Set to store common characters
  let commonChars = new Set(strings[0]);

  // Iterate over the remaining strings
  for (let i = 1; i < strings.length; i++) {
    let currentString = strings[i];

    // Create a new Set to store the characters present in the current string
    let currentChars = new Set(currentString);

    // Filter out characters from `commonChars` that are not present in the current string
    commonChars = new Set(Array.from(commonChars).filter(char => currentChars.has(char)));
  }

  // Convert the Set to an array and return the result
  return Array.from(commonChars);
}

// Solution 2 | O(n^2) time | O(n) space
function commonCharactersS2(strings) {
  // Write your code here.
    // Create an array to store the common characters
    let commonChars = [];
  
    // Check if there are no strings in the array
    if (strings.length === 0) {
      // Return the empty array
      return commonChars;
    }
  
    // Iterate over the characters in the first string
    for (let i = 0; i < strings[0].length; i++) {
      let char = strings[0][i];
      // Check if the current character is present in all the strings
      if (strings.every(string => string.includes(char))) {
        // Check if the current character is already present in the array
        if (!commonChars.includes(char)) {
          // Push the character to the array if it is present in all the strings
          commonChars.push(char);
        }
      }
    }
  
    // Return the array
    return commonChars;
    
  }