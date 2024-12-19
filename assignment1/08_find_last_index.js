// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters
function findLastIndex(array, element) {
  for (let index = array.length - 1; index >= 0; index--) {
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
  let message = "the last index  " + addQuote(element);
  message += " in " + addQuote(array);
  message = message + " is expected  :: " + addQuote(expected);
  message = message + " actual :: " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testFindLastIndex(array, element, expected) {
  const actual = findLastIndex(array, element);
  const message = makeMessage(array, element, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea"], "tea", 4);
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea"], "Beauty", -1);
  testFindLastIndex(["apple", "cake", "tea", "coffee", "tea"], "", -1);
  testFindLastIndex(["", "cake", "tea", "coffee", " "], " ", 4);
}

testingFunction();
