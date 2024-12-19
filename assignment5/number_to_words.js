function singleDigitInWord(digit) {
  const singleDigit = ["zero", "one", "two", "three", "four", "five", "six",
    "seven", "eight", "nine"];

  return singleDigit[digit];
}

function getTwoDigitWithoutZero(digit, string) {
  const twoDigitWithoutZero = ["ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

  if (digit === 1) {
    return twoDigitWithoutZero[string[digit]];
  }

  return twoDigitWithoutZero[digit];
}

function getTensPlaceWord(digit) {
  const twoDigit = ["twenty ", "thirty ", "forty ", "fifty ", "sixty ",
    "seventy ", "eighty ", "ninety "];

  return twoDigit[digit - 2];
}

function getWord(position, digit, string) {
  if (position === 1) {
    return singleDigitInWord(digit);
  }

  if (position === 2) {
    if (string[0] === 1) {
      return getTwoDigitWithoutZero(digit, string);
    }

    return getTensPlaceWord(digit);
  }

  return "";
}

function getNumberInTens(digits) {
  let numberInWord = "";
  let position = 1;

  for (let index = digits.length - 1; index >= 0; index--) {
    const word = getWord(position, digits[index], digits, index);

    if (position === 2 && digits[index] === 1 || digits[index + 1] === 0) {
      numberInWord = "";
    }

    numberInWord = word + numberInWord;
    position++;
  }

  return numberInWord;
}

function lastThreeDigits(digits, from) {
  return (digits.slice(from, digits.length));
}

function isAllElementsZeros(array) {
  for (const element of array) {
    if (element !== 0) {
      return false;
    }
  }

  return true;
}

function getNumberInWords(type, digits, from) {
  const previousUnitDigits = lastThreeDigits(digits, from);
  const currentUnitDigits = numberToWords(+digits.slice(0, from).join(""));

  if (!isAllElementsZeros(previousUnitDigits)) {
    const previousUnitNumber = +(previousUnitDigits.join(''));
    return currentUnitDigits + type + numberToWords(previousUnitNumber);
  }

  return currentUnitDigits + type;
}

function typeOfUnit(length) {
  if (length <= 6) {
    return " thousand ";
  }

  if (length <= 9) {
    return " million ";
  }

  return " billion ";
}

function endIndexOfLastUnitType(length) {
  let number = length - 1;

  while (number % 3 !== 0) {
    number--;
  }

  return number;
}

function extractDigits(number) {
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

function numberToWords(number) {
  const digits = extractDigits(number);
  const length = digits.length;

  if (length < 3) {
    return getNumberInTens(digits).trim();
  }

  if (length === 3) {
    return getNumberInWords(" hundred ", digits, 1).trim();
  }

  const unitType = typeOfUnit(length);
  const startingIndexOfUnitType = length - endIndexOfLastUnitType(length);

  return getNumberInWords(unitType, digits, startingIndexOfUnitType).trim();
}

// --------------------Testing section starts from here ----------------------

function addQuote(text) {
  return "'" + text + "'";
}

function makeMessage(number, actual, expected) {
  let message = "The number " + addQuote(number) + " in english words ";
  message = message + " is expected " + addQuote(expected);
  message = message + " actual " + addQuote(actual);

  return getCheckMark(actual, expected) + message;
}

function getCheckMark(actual, expected) {
  return actual === expected ? '✅' : '❌';
}

function testNumberToWords(number, expected) {
  const actual = numberToWords(number);
  const message = makeMessage(number, actual, expected);
  console.log(message);
}

function testSingleDigit() {
  console.log("\n------Test Single Digit--------\n");
  testNumberToWords(0, "zero");
  testNumberToWords(1, "one");
  testNumberToWords(2, "two");
  testNumberToWords(3, "three");
  testNumberToWords(4, "four");
  testNumberToWords(5, "five");
  testNumberToWords(6, "six");
  testNumberToWords(7, "seven");
  testNumberToWords(8, "eight");
  testNumberToWords(9, "nine");
}

function startsWithOne() {
  console.log("\n------Starts With One--------\n");
  testNumberToWords(11, "eleven");
  testNumberToWords(12, "twelve");
  testNumberToWords(13, "thirteen");
  testNumberToWords(14, "fourteen");
  testNumberToWords(15, "fifteen");
  testNumberToWords(16, "sixteen");
  testNumberToWords(17, "seventeen");
  testNumberToWords(18, "eighteen");
  testNumberToWords(19, "nineteen");
}

function startsWithoutOne() {
  console.log("\n------Starts Without One--------\n");
  testNumberToWords(21, "twenty one");
  testNumberToWords(32, "thirty two");
  testNumberToWords(46, "forty six");
  testNumberToWords(57, "fifty seven");
  testNumberToWords(66, "sixty six");
  testNumberToWords(75, "seventy five");
  testNumberToWords(83, "eighty three");
  testNumberToWords(98, "ninety eight");
}

function endsWithZero() {
  console.log("\n------Ends With Zero--------\n");
  testNumberToWords(10, "ten");
  testNumberToWords(20, "twenty");
  testNumberToWords(30, "thirty");
  testNumberToWords(40, "forty");
  testNumberToWords(50, "fifty");
  testNumberToWords(60, "sixty");
  testNumberToWords(70, "seventy");
  testNumberToWords(80, "eighty");
  testNumberToWords(90, "ninety");

}

function testTens() {
  console.log("\n------Test Tens-------\n");
  startsWithOne();
  startsWithoutOne();
  endsWithZero();
}

function testHundreds() {
  console.log("\n------Test Hundreds-------\n");
  testNumberToWords(120, "one hundred twenty");
  testNumberToWords(200, "two hundred");
  testNumberToWords(210, "two hundred ten");
  testNumberToWords(100, "one hundred");
  testNumberToWords(101, "one hundred one");
  testNumberToWords(110, "one hundred ten");
  testNumberToWords(199, "one hundred ninety nine");
  testNumberToWords(999, "nine hundred ninety nine");
}

function testThousands() {
  console.log("\n-------Test Thousands-------\n");
  testNumberToWords(1000, "one thousand");
  testNumberToWords(7002, "seven thousand two");
  testNumberToWords(10001, "ten thousand one");
  testNumberToWords(100001, "one hundred thousand one");
  testNumberToWords(23456, "twenty three thousand four hundred fifty six");
  testNumberToWords(1234, "one thousand two hundred thirty four");
  testNumberToWords(999999, "nine hundred ninety nine thousand nine hundred ninety nine");

}

function testMillion() {
  console.log("\n-------Test Million-------\n");
  testNumberToWords(9999999, "nine million nine hundred ninety nine thousand nine hundred ninety nine");
  testNumberToWords(1000000, "one million");
  testNumberToWords(100000000, "one hundred million");
  testNumberToWords(100000001, "one hundred million one");
  testNumberToWords(10000000, "ten million");
  testNumberToWords(10000001, "ten million one");
  testNumberToWords(999999999, "nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
}

function testBillion() {
  console.log("\n-------Test Billion-------\n");
  testNumberToWords(9999999999, "nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
  testNumberToWords(1000000000, "one billion");
  testNumberToWords(1000000001, "one billion one");
  testNumberToWords(10000000000, "ten billion");
  testNumberToWords(10000000001, "ten billion one");
  testNumberToWords(100000000000, "one hundred billion");
  testNumberToWords(100000000001, "one hundred billion one");
  testNumberToWords(999999999999, "nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
}

function testingFunction() {
  testSingleDigit();
  testTens();
  testHundreds();
  testThousands();
  testMillion();
  testBillion();
}

testingFunction();