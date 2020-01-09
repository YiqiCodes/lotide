const eqArrays = function(first, second) {
  console.log("BLACK", first);
  console.log("WHITE", second);
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

const words = ["epstein", "didn't", "kill", "himself"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = words.map(word => word[0]);
//const results1 = map(words, word => word[0]);

console.log("TEST", results1);
console.log("TEST2", ["e", "d", "k", "h"]);
assertEqual(eqArrays(results1, ["e", "d", "k", "h"]), true);
