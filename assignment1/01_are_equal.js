// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
// do not modify input parameters
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

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(array1, array2, actual, expected) {
  let message = "the array  " + addQuote(array1) + " and " + addQuote(array2);
  message = message + " are equal  expected  :: " + addQuote(expected);
  message = message + " actual :: " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);
  const message = makeMessage(array1, array2, actual, expected);
  console.log(message);
}

function testingFunction() {
  testAreEqual([], [], true);
  testAreEqual([" "], [" "], true);
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual([1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual([1, 2, 3], [1, 3, 2], false);
}

testingFunction();
