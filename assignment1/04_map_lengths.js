// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
// do not modify input parameters
function mapLengths(words) {
  const lengthsArray = [];

  for (let index = 0; index < words.length; index++) {
    lengthsArray[index] = words[index].length;
  }

  return lengthsArray;
}

// --------------------Testing section starts from here ----------------------

function addQuote(text) {
  return "[" + text + "]";
}

function makeMessage(numbers, actual, expected) {
  let message = "The lengths of words in array  " + addQuote(numbers);
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

function testMapLengths(words, expected) {
  const actual = mapLengths(words);
  const message = makeMessage(words, actual, expected);
  console.log(message);
}

function testingFunction() {
  testMapLengths(["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths([" ", ""], [1, 0]);
}

testingFunction();