// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false
function isPresent(element, array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isPresent(elements[index], array)) {
      return false;
    }
  }

  return true;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(array, elements, actual, expected) {
  let message = "All the elements of array " + addQuote(elements) + " are ";
  message += "present in array " + addQuote(array);
  message += " is expected  :: " + addQuote(expected);
  message = message + " actual :: " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testContainAll(array, elements, expected) {
  const actual = containsAll(array, elements);
  const message = makeMessage(array, elements, actual, expected);
  console.log(message);
}

function testingFunction() {
  testContainAll([1, 2, 3], [2, 1], true);
  testContainAll([1, 2, 3], [2, 1, 4], false);
  testContainAll([], [2, 1, 4], false);
  testContainAll([1, 2, 3], [], true);
  testContainAll([], [], true);
}

testingFunction();
