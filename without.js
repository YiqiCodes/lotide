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

const without = function(original, push) {
  let withoutArray = [];
  for (i = 0; i < original.length; i++) {
    if (push.includes(originatl[i]) === false) {
      withoutArray.push(original[i]);
    }
  }
  return withoutArray;
};

assertEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
