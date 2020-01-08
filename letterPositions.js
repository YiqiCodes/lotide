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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(index);
    } else {
      results[letter] = [index];
    }
    index++;
  }
  console.log(results);
};

assertEqual(letterPositions("hello"), {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
});
