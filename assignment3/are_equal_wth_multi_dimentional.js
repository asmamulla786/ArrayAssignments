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

console.log(areEqual([[]], [[]], 0));
console.log(areEqual([[]], [[1]], 0));
console.log(areEqual([[1], [2], [1, 2]], [[2], [1], [2, 1]], 0));
console.log(areEqual([[1, 2, 1]], [[2, 1,2]], 0));