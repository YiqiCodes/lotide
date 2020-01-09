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
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let keys = Object.keys(object1);
  let status = true;

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key of keys) {
      if (Array.isArray(object1[key])) {
        let arrays = eqArrays(object1[key], object2[key]);
        if (arrays === false) status = false;
      } else if (object1[key] !== object2[key]) {
        status = false;
      }
    }
  } else {
    status = false;
  }
  return status;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  if (actual === expected) {
    console.log(
      `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false
