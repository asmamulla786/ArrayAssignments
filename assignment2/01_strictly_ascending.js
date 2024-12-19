// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] >= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(numbers, actual, expected) {
  let message = "the array of numbers  " + addQuote(numbers) + " is in";
  message += " strictly ascending order  expected  :: " + addQuote(expected);
  message = message + " actual :: " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testStrictlyAscending(numbers, expected) {
  const actual = isStrictlyAscending(numbers);
  const message = makeMessage(numbers, actual, expected);
  console.log(message);
}

function testingFunction() {
  testStrictlyAscending([1, 3, 4, 5, 16], true);
  testStrictlyAscending([], true);
  testStrictlyAscending([1, 3, 4, 5, 2], false);
  testStrictlyAscending([1, 3, 3, 4], false);

}

testingFunction();
