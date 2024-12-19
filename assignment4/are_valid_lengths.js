const matrixA = [[1, 2], [3, 4],[]];

function areSameLengths(matrixA, length, index) {
  if (index >= matrixA.length) {
    return true;
  }

  if (matrixA[index].length !== length) {
    return false;
  }

  return areSameLengths(matrixA, length, index + 1)
}

console.log(areSameLengths(matrixA, matrixA[0].length, 0));