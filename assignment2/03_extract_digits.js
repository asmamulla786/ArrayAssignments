// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

export function extractDigits(number) {
  if (Math.abs(number) === 0) {
    return [0];
  }

  const digits = [];
  let remainingNumber = Math.abs(number);

  while (remainingNumber > 0) {
    digits.unshift(remainingNumber % 10);
    remainingNumber = Math.floor(remainingNumber / 10);
  }

  return digits;
}

// --------------------Testing section starts from here ----------------------

function addQuote(text) {
  return "[" + text + "]";
}

function makeMessage(number, actual, expected) {
  let message = "An array with the digits of " + addQuote(number);
  message = message + " is expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);

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
  return areEqual(actual, expected) ? "✅" : "❌";
}

function testExtractDigits(number, expected) {
  const actual = extractDigits(number);
  const message = makeMessage(number, actual, expected);
  console.log(message);
}

function testingFunction() {
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(120, [1, 2, 0]);
  // testExtractDigits(12.3, [1, 2, 3]);
  testExtractDigits(-123, [1, 2, 3]);
  testExtractDigits(0, [0]);
}

// testingFunction();
