const eqArrays = function(first, second) {
  // if (first === second) return true;
  // if (first == null || second == null) return false;
  if (first.length != second.length) return false;

  for (let i = 0; i < first.length; ++i) {
    if (first[i] !== second[i]) return false;
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];

const takeUntil = function(array, callback) {
  const results = [];
  console.log("TEST2", callback);
  for (let item of array) {
    console.log("TEST", item);
    if (callback(item)) return results;
    else {
      results.push(item);
    }
  }
};

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log("---");

const results2 = takeUntil(data2, x => x === ",");
console.log(results2);

// const results3 = takeUntil(data1, function(item) {
//   if (item < 0) return true;
// });

assertEqual(eqArrays(results1, [1, 2, 5, 7, 2]), true);
assertEqual(eqArrays(results2, ["I've", "been", "to", "Hollywood"]), true);
