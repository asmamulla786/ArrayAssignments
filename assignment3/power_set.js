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

function generatePowerSet(array) {
  const subset = [[]];

  if (array.length === 0) {
    return subset;
  }

  for (let index = 0; index < array.length; index++) {
    const length = subset.length;

    for (let subindex = 0; subindex < length; subindex++) {
      subset.push(concat(subset[subindex], array[index]));
    }
  }

  return subset;
}

// --------------------Testing section starts from here ------------------------

function addQuote(text) {
  return "[" + text + "]";
}

function makeMessage(array, actual, expected) {
  const message = "The subset array of " + addQuote(array);

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
  return areEqual(actual, expected, 0) ? '✅' : '❌';
}

function testPowerSet(array, expected) {
  const actual = generatePowerSet(array)
  const message = makeMessage(array, actual, expected);
  console.log(message);
  console.log(actual);

}

function testingFunction() {
  testPowerSet([], [[]]);
  testPowerSet([1], [[], [1]]);
  testPowerSet([1, 2], [[], [1], [2], [1, 2]]);
  testPowerSet([1, 2, 3], [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
}

testingFunction();