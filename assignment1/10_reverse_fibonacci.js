// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters
function reverseFibonacci(number) {
  const fibonacciArray = [];
  let previousTerm = 0;
  let currentTerm = 1;

  for (let term = number - 1; term >= 0; term--) {
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

function makeMessage(n, actual, expected) {
  let message = "An array with reverse fibonacci series first ";
  message += addQuote(n) + " elements is expected  :: " + addQuote(expected);
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

function testReverseFibonacci(number, expected) {
  const actual = reverseFibonacci(number);
  const message = makeMessage(number, actual, expected);
  console.log(message);
}

function testingFunction() {
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(0, []);
}

testingFunction();
