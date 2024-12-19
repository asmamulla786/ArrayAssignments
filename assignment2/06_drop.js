// Remove first n elements from the array
// drop([1, 2, 3], 1) => [2, 3]
// drop([1, 2, 3], 4) => []
// Do not modify the original array
function drop(array, noOfElements) {
  const remainingElements = [];

  for (let index = noOfElements; index < array.length; index++) {
    remainingElements.push(array[index]);
  }

  return remainingElements;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(array, noOfElements, actual, expected) {
  let message = "The array " + addQuote(array) + "after removing first ";
  message += addQuote(noOfElements) + " elements is expected  :: ";
  message += addQuote(expected) + " actual :: " + addQuote(actual);

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

function testDrop(array, noOfElements, expected) {
  const actual = drop(array, noOfElements);
  const message = makeMessage(array, noOfElements, actual, expected);
  console.log(message);
}

function testingFunction() {
  testDrop([1, 2, 3], 1, [2, 3]);
  testDrop([1, 2, 3], 4, []);
  testDrop([], 4, []);
}

testingFunction();
