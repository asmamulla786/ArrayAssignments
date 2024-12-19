// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters
function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(array, element, actual, expected) {
  let message = "the first index  " + addQuote(element);
  message += " in " + addQuote(array);
  message = message + " is expected  :: " + addQuote(expected);
  message = message + " actual :: " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindIndex(array, element, expected) {
  const actual = findIndex(array, element);
  const message = makeMessage(array, element, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 2);
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "Beauty", -1);
  testFindIndex(["apple", "cake", "tea", "coffee", "tea"], "", -1);
  testFindIndex([" ", "cake", "tea", "coffee", "tea"], " ", 0);
}

testingFunction();
