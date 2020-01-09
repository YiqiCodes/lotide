const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const data = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 }
};

const findKey = function(array, callback) {
  for (let star of Object.keys(array)) {
    // console.log("TEST1", array[star].stars);
    // console.log("TEST2", array[star]);
    // console.log("TEST3", star);
    // console.log("TEST4", Object.keys(array));
    if (callback(array[star])) {
      // console.log("TEST5", star);
      return star;
    }
  }
  return undefined;
};

const results1 = findKey(data, x => x.stars === 2);
// console.log("FINAL", results1);

assertEqual(results1, "noma");
