function getProductMatrixRow(matrixARow, matrix) {
  const productMatrixRow = [];

  for (let row = 0; row < matrix[0].length; row++) {
    let sum = 0;

    for (let column = 0; column < matrix.length; column++) {
      sum += matrixARow[column] * matrix[column][row];
    }

    productMatrixRow.push(sum);
  }

  return productMatrixRow;
}

function areSameLengths(matrix, index) {
  if (index >= matrix.length) {
    return true;
  }

  if (matrix[index].length !== matrix[0].length) {
    return false;
  }

  return areSameLengths(matrix, index + 1);
}

function areValidDimensions(matrixA, matrixB) {
  if (matrixB.length !== matrixA[0].length) {
    return false;
  }

  if (!areSameLengths(matrixA, 0)) {
    return false;
  }

  return areSameLengths(matrixB, 0) && matrixB[0].length !== 0;
}

function isMatrixEmpty(matrixA, matrixB) {
  const isEmptyMatrix = matrixA.length === 0 && matrixB.length === 0;

  return isEmptyMatrix || matrixA[0].length === 0 && matrixB[0].length === 0;
}

function multiplyMatrices(matrixA, matrixB) {
  if (isMatrixEmpty(matrixA, matrixB)) {
    return matrixB;
  }

  if (!areValidDimensions(matrixA, matrixB)) {
    return NaN;
  }

  const productArray = [];

  for (const row of matrixA) {
    productArray.push(getProductMatrixRow(row, matrixB));
  }

  return productArray;
}

// --------------------Testing section starts from here ------------------------

function addQuote(text) {
  return "[" + text + "]";
}

function makeMessage(matrixA, matrixB, actual, expected) {
  let message = "The multiplication of of " + addQuote(matrixA);
  message += " and " + addQuote(matrixB) + " is ";

  return getCheckMark(actual, expected) + message;
}

function isEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!array1.includes(array2[index])) {
      return false;
    }
  }

  return true;
}

function isSubset(array1Element, array2, index) {

  if (index >= array2.length) {
    return false;
  }

  if (isEqual(array1Element, array2[index])) {
    return true;
  }

  return isSubset(array1Element, array2, index + 1);
}

function areEqual(array1, array2, index) {
  if (index >= array1.length) {
    return true;
  }

  if (!isSubset(array1[index], array2, 0)) {
    return false;
  }

  return areEqual(array1, array2, index + 1);
}

function getCheckMark(actual, expected) {
  if (expected + "" === "NaN") {
    return actual + "" === "" + expected ? '✅' : '❌';
  }

  return areEqual(actual, expected, 0) ? '✅' : '❌';
}

function testMatrixMultiply(matrixA, matrixB, expected) {
  const actual = multiplyMatrices(matrixA, matrixB)
  const message = makeMessage(matrixA, matrixB, actual, expected);
  console.log(message);
  console.log(actual);

}

function testEmptyArrays() {
  testMatrixMultiply([[]], [[]], [[]]);
  testMatrixMultiply([], [], []);
}

function testInvalidDimensions() {
  testMatrixMultiply([[1, 2], [3]], [[3], [1, 4]], NaN);
  testMatrixMultiply([[1, 2], [3, 1]], [[3]], NaN);
  testMatrixMultiply([[1, 2], [3]], [[3], [1, 4]], NaN);
  testMatrixMultiply([[]], [[1]], NaN);
  testMatrixMultiply([[1]], [[]], NaN);
}

function testMatrixAWithOneRow() {
  testMatrixMultiply([[1]], [[4]], [[4]]);
  testMatrixMultiply([[1, 2]], [[2], [1]], [[4]]);
  testMatrixMultiply([[1, 3, 4]], [[4], [2], [1]], [[14]]);
}

function testMatrixAWithTwoRows() {
  testMatrixMultiply([[1], [2]], [[4]], [[4], [8]]);
  testMatrixMultiply([[1, 2], [3, 4]], [[5, 6], [7, 8]], [[19, 22], [43, 50]]);
  testMatrixMultiply([[1, 2, 1], [3, 4, 1]], [[1], [2], [1]], [[6], [12]]);
}

function testingFunction() {
  testEmptyArrays();
  testInvalidDimensions();
  testMatrixAWithOneRow();
  testMatrixAWithTwoRows();
  testMatrixMultiply([[1, 2], [3, 4], [5, 6]], [[1, 2, 3, 2], [1, 4, 5, 6]], [[3, 10, 13, 14], [7, 22, 29, 30], [11, 34, 45, 46]]);
}

testingFunction();