// const singleDigit = [zero, one, two, three, four, five, six, seven, eight, nine]
// const twoDigit = [twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety];
// const leadingZerosWithOne = [ten, hundred, thousand, million, billion];
// const twoDigitWithoutZero = [eleven, twelve, thirteen, fourteen, , fifteen, sixteen, seventeen, eighteen, nineteen];

// function getNumberInThousands(string) {
//   let hundredsDigits = lastThreeDigits(string, string.length - 3, string.length);
//   const thousandDigits = numberToWords(string.slice(0, string.length - 3));

//   if (hundredsDigits !== "0") {
//     return thousandDigits + " thousand " + numberToWords(hundredsDigits);
//   }

//   return thousandDigits + " thousand"
// }

// function getNumberInWords(type, string, from, to) {
//   let previousTypeDigits = lastThreeDigits(string, from, to);
//   const currentTypeDigits = numberToWords(string.slice(0, from));

//   if (previousTypeDigits !== "0") {
//     return currentTypeDigits + type + numberToWords(previousTypeDigits);
//   }

//   return currentTypeDigits + type;
// }

// function typeOfUnit(length) {
//   if (length <= 6) {
//     return " thousand ";
//   }

//   if (length <= 9) {
//     return " million ";
//   }

//   return " billion ";
// }
// const string = "1234567";
// const unitType = typeOfUnit(string.length);
// console.log(unitType);

let number = 1223456;

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

console.log(extractDigits(number));