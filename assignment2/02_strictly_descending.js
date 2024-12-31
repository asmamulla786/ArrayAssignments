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

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(numbers, actual, expected) {
  let message = "the array of numbers  " + addQuote(numbers) + " is in";
  message += " strictly descending order  expected  :: " + addQuote(expected);
  message = message + " actual :: " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? "✅" : "❌";
}

function testStrictlyDescending(numbers, expected) {
  const actual = isStrictlyDescending(numbers);
  const message = makeMessage(numbers, actual, expected);
  console.log(message);
}

function testingFunction() {
  testStrictlyDescending([5, 4, 3, 2, 1], true);
  testStrictlyDescending([], true);
  testStrictlyDescending([1, 3, 4, 5, 2], false);
  testStrictlyDescending([4, 3, 3, 1], false);
}

// testingFunction();
