const assertArraysEquals = require("./assertArraysEquals");

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

// assertEqual(middle([1]), []); // => []
// assertEqual(middle([1, 2]), []); // => []

// assertEqual(middle([1, 2, 3]), [2]); // => [2]
// assertEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// assertEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

module.exports = middle;
