// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
// Do not modify the original array
function dropLast(array, noOfElements) {
  const remainingElements = [];

  for (let index = 0; index < array.length - noOfElements; index++) {
    remainingElements.push(array[index]);
  }

  return remainingElements;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(array, noOfElements, actual, expected) {
  let message = "The array " + addQuote(array) + "after removing last ";
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

function testLastDrop(array, noOfElements, expected) {
  const actual = dropLast(array, noOfElements);
  const message = makeMessage(array, noOfElements, actual, expected);
  console.log(message);
}

function testingFunction() {
  testLastDrop([1, 2, 3], 1, [1, 2]);
  testLastDrop([1, 2, 3], 4, []);
  testLastDrop([], 4, []);
}

testingFunction();
