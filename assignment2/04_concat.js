// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]
function copyArray(array) {
  const copiedArray = [];

  for (let index = 0; index < array.length; index++) {
    copiedArray.push(array[index]);
  }

  return copiedArray;
}

function concat(array1, array2) {
  const concatinatedArray = copyArray(array1);

  for (let index = 0; index < array2.length; index++) {
    concatinatedArray.push(array2[index]);
  }

  return concatinatedArray;

}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(array1, array2, actual, expected) {
  let message = "concatination of " + addQuote(array1) + " and ";
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

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);
  const message = makeMessage(array1, array2, actual, expected);
  console.log(message);
}

function testingFunction() {
  testConcat([], [], []);
  testConcat([" "], [" "], [" ", " "]);
  testConcat([1, 2], [1, 2, 3], [1, 2, 1, 2, 3]);
  testConcat([1, 2, 3], [], [1, 2, 3]);
  testConcat([1, 2, 3], [" "], [1, 2, 3, " "]);
}

testingFunction();
