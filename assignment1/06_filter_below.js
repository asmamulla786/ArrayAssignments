// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers which are below threshold.
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
// do not modify input parameters
function filterBelow(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

// --------------------Testing section starts from here ----------------------

function addQuote(text) {
  return "[" + text + "]";
}

function makeMessage(array, threshold, actual, expected) {
  let message = "The array with numbers below " + addQuote(threshold);
  message += " from array " + addQuote(array);
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

function testFilterBelow(array, threshold, expected) {
  const actual = filterBelow(array, threshold);
  const message = makeMessage(array, threshold, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFilterBelow([6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testFilterBelow([6, 2, 3, 1, 4, 7], 1, []);
  testFilterBelow([1, 2, 3], 4, [1, 2, 3]);
}

testingFunction();