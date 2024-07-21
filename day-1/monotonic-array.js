/**
Coding Exercise: Monotonic Array
Question

An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.
 */
const checkMonotonic = function (array) {
  if (array.length <= 2) return true;
  if (array.every((item) => item === array[0])) return true;

  const isMonoIncreasing = array.every((item, index) => {
    if (index === 0) return true;
    return item >= array[index - 1];
  });

  if (isMonoIncreasing) return true;

  const isMonoDecreasing = array.every((item, index) => {
    if (index === 0) return true;
    return item <= array[index - 1];
  });

  return isMonoDecreasing;
};

const checkMonotonicV2 = function (array) {
  if (array.length <= 2) return true;
  if (array.every((item) => item === array[0])) return true;

  let left = 0;
  let right = 1;

  if (array[left] < array[right]) {
    while (right < array.length - 1 && left < array.length - 2) {
      left++;
      right++;
      if (array[left] > array[right]) return false;
    }
    return true;
  } else {
    while (right > array.length - 1) {
      left++;
      right++;
      if (array[left] < array[right]) return false;
    }
    return true;
  }
};

const dataset = [
  [],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [1, 3, 2, 4, 5],
  [1, 1, 1, 1, 1],
];

dataset.forEach((data) => {
  console.log(checkMonotonicV2(data));
});
