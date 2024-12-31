// Given an array of numbers true if numbers are in strictly descending order
// otherwise false.
// isStrictlyDescending([5, 4, 2, 1]) => true
// isStrictlyDescending([5, 4, 6, 1]) => false
// isStrictlyDescending([5, 4, 4, 1]) => false

export function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] <= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}
