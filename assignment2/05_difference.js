// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]
function isPresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const arrayWithDifference = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isPresent(array1[index], array2)) {
      arrayWithDifference.push(array1[index]);
    }
  }

  return arrayWithDifference;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(array1, array2, actual, expected) {
  let message = "Difference of " + addQuote(array1) + " and ";
  message += addQuote(array2) + " is expected  :: " + addQuote(expected);
  message = message + " actual :: " + addQuote(actual);

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

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);
  const message = makeMessage(array1, array2, actual, expected);
  console.log(message);
}

function testingFunction() {
  testDifference([1, 2, 3], [2, 3, 4], [1]);
  testDifference([1], [1, 3, 4], []);
  testDifference([], [1, 3, 4], []);
  testDifference([1, 2, 3], [], [1, 2, 3]);
}

testingFunction();
