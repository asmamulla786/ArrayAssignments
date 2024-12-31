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
