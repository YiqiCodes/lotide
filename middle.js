const eqArrays = function(first, second) {
  if (first === second) return true;
  if (first == null || second == null) return false;
  if (first.length != second.length) return false;

  for (let i = 0; i < first.length; ++i) {
    if (first[i] !== second[i]) return false;
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    middle = [];
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2 + 1);
    middle.push(middleIndex);
  } else if (array.length % 2 === 0) {
    let leftIndex = array.length / 2;
    middle.push(leftIndex);
    let rightIndex = array.length / 2 + 1;
    middle.push(rightIndex);
  }
  return middle;
};

assertEqual(middle([1]), []); // => []
assertEqual(middle([1, 2]), []); // => []

assertEqual(middle([1, 2, 3]), [2]); // => [2]
assertEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
