// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
// do not modify input parameters
function fibonacci(number) {
  const fibonacciArray = [];
  let previousTerm = 0;
  let currentTerm = 1;

  for (let term = 0; term < number; term++) {
    fibonacciArray[term] = previousTerm;
    previousTerm = currentTerm;
    currentTerm = previousTerm + fibonacciArray[term];
  }

  return fibonacciArray;
}

// --------------------Testing section starts from here ----------------------

function addQuote(textToQuote) {
  return "[" + textToQuote + "]";
}

function makeMessage(number, actual, expected) {
  let message = "An array with fibonacci series first ";
  message += addQuote(number) + " elements is expected  :: ";
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

function testFibonacci(number, expected) {
  const actual = fibonacci(number);
  const message = makeMessage(number, actual, expected);
  console.log(message);
}

function testingFunction() {
  testFibonacci(5, [0, 1, 1, 2, 3]);
  testFibonacci(2, [0, 1]);
  testFibonacci(0, []);
}

testingFunction();
