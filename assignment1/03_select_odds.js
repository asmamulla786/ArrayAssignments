// Given an array of numbers return a new array containing only odd elements of the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

function isDivisibleBy(dividend, divisor) {
  return dividend % divisor === 0;
}

function selectOdds(numbers) {
  const oddArray = [];

  for (let index = 0; index < numbers.length; index++) {
    if (!isDivisibleBy(numbers[index], 2)) {
      oddArray[oddArray.length] = numbers[index];
    }
  }

  return oddArray;
}

// --------------------Testing section starts from here ----------------------

function addQuote(text) {
  return "[" + text + "]";
}

function makeMessage(numbers, actual, expected) {
  let message = "Odd numbers Array from  " + addQuote(numbers);
  message = message + " is expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function getCheckMark(actual, expected) {
  return areEqual(actual, expected) ? '✅' : '❌';
}

function testSelectOdds(numbers, expected) {
  const actual = selectOdds(numbers);
  const message = makeMessage(numbers, actual, expected);
  console.log(message);
}

function testingFunction() {
  testSelectOdds([1, 2, 3], [1, 3]);
  testSelectOdds([0, 2, 4, 6], []);
  testSelectOdds([], []);
}

testingFunction();