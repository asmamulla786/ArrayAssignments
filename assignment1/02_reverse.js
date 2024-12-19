// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters
function reverse(array) {
  const reversedArray = [];

  for (let index = 0; index < array.length; index++) {
    reversedArray[index] = array[array.length - index - 1];
  }

  return reversedArray;
}

// --------------------Testing section starts from here ----------------------

function addQuote(text) {
  return "[" + text + "]";
}

function makeMessage(array, actual, expected) {
  let message = "Reverse of " + addQuote(array);
  message = message + " expected " + addQuote(expected);
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

function testReverse(array, expected) {
  const actual = reverse(array);
  const message = makeMessage(array, actual, expected);
  console.log(message);
}

function testingFunction() {
  testReverse([1, 2, 3], [3, 2, 1]);
  testReverse([1, 2, 3, 4], [4, 3, 2, 1]);
  testReverse([" "], [" "]);
  testReverse([], []);
}

testingFunction();