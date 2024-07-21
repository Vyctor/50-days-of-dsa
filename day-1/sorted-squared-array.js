/**
CODING INTERVIEW Q1 (Easy): Sorted Squared Array
Question

You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

Remember

You can solve this question in multiple ways.

Think about the following -

1.What would be the brute force way of solving this question ? What would be the Time and Space complexity of this approach?

2.Is there a better way to solve this with a more optimum Time complexity than the Brute force way ?
*/

// My solution
// O(nlogn) Time Complexity
// O(n) Space Complexity
function mySolution(array) {
  return array.map((item) => Math.pow(item, 2)).sort((a, b) => a - b);
}

// Instructor's solution -> Two Pointer Approach
// Time Complexity: O(n)
// Space Complexity: O(n)
function instructorsSolution(array) {
  const newArray = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  while (left !== right) {
    const leftValue = Math.pow(array[left], 2);
    const rightValue = Math.pow(array[right], 2);

    if (leftValue > rightValue) {
      newArray[right - left] = leftValue;
      left++;
    } else {
      newArray[right - left] = rightValue;
      right--;
    }
  }
  return newArray;
}

const data = [-3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(instructorsSolution(data));
