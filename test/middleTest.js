const assertArrayEquals = require("../assertArraysEquals");
const middle = require("../middle");

// assertArrayEquals(middle([1]), []); // => []
// assertArrayEquals(middle([1, 2]), []); // => []

assertArrayEquals(middle([1, 2, 3]), [2]); // => [2]
assertArrayEquals(middle([1, 2, 3, 4, 5]), [3]); // => [3]

// assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArrayEquals(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
