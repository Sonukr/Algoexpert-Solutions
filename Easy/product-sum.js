/**
 Product Sum
  Write a function that takes in a "special" array and returns its product sum.

  A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.

  The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.

  Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

  Sample Input
  array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
  Sample Output
  12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

*/

/**
  Test Case 1
  {
    "array": [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
  }
  Test Case 2
  {
    "array": [1, 2, 3, 4, 5]
  }
  Test Case 3
  {
    "array": [1, 2, [3], 4, 5]
  }
  Test Case 4
  {
    "array": [
      [1, 2],
      3,
      [4, 5]
    ]
  }
  Test Case 5
  {
    "array": [
      [
        [
          [
            [5]
          ]
        ]
      ]
    ]
  }
  Test Case 6
  {
    "array": [9, [2, -3, 4], 1, [1, 1, [1, 1, 1]], [[[[3, 4, 1]]], 8], [1, 2, 3, 4, 5, [6, 7], -7], [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7], [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]], -3]
  }
  Test Case 7
  {
    "array": [6, [-13, 8], 4]
  }
*/


// Solution1 | Time O(n) | Space O(d)

// This function calculates the product sum of a nested array, where each element is multiplied by its depth level and the result is summed.
function productSumS1(array, currentLevel=1, previousMultiplier=1) {
  // Use the `reduce` method to iterate through the elements of the array and calculate the product sum.
  return array.reduce((acc,item) => {
    if(Array.isArray(item)) {
      // If the current item is an array, recursively call the `productSumS1` function with updated parameters.
      const newMultiplier = previousMultiplier * currentLevel
      acc = acc + productSumS1(item, currentLevel + 1, newMultiplier)
    } else {
      // If the current item is not an array, calculate the product sum by multiplying the item with the previous multiplier and the current level. Add it to the accumulator.
      acc = acc + item * previousMultiplier * currentLevel
    }
    return acc
  },0)
}

// Solution2 | Time O(n) | Space O(d)

// This function calculates the product sum of a nested array, where each element is multiplied by its depth level and the result is summed.
function productSumS2(array, depth = 2) {
  // Use the `reduce` method to iterate through the elements of the array and calculate the product sum.
  return array.reduce((acc, v) => {
    if (Array.isArray(v)) {
      // If the current element is an array, recursively call the `productSumS2` function with updated parameters: the nested array as the new array parameter, and the incremented depth level.
      return acc + (depth * productSumS2(v, depth + 1));
    }
    // If the current element is not an array, simply add it to the accumulator.
    return acc + v;
  }, 0)
}


// Solution3 | Time O(n) | Space O(d)

// This function calculates the product sum of a nested array, where each element is multiplied by its depth level and the result is summed.
function productSum(array, depth = 1) {
  let total = 0;

  // Iterate through each element of the array using a `for...of` loop.
  for (const e of array) {
    if (Array.isArray(e)) {
      // If the current element is an array, recursively call the `productSum` function with updated parameters: the nested array as the new `array` parameter, and the incremented depth level.
      total += productSum(e, depth + 1);
    } else {
      // If the current element is not an array, simply add it to the `total`.
      total += e;
    }
  }

  // Multiply the `total` by the `depth` level and return the result as the product sum.
  return total * depth;
}
