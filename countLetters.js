const assertEqual = function(actual, expected) {
  // console.log("BLACK", actual);
  // console.log("WHITE", expected);

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word, wordToCount) {
  const results = {};
  console.log("BLACK", results);

  for (const letter of word) {
    if (wordToCount[letter]) {
      // console.log("VIOLET", itemsToCount[item]);
      // console.log("AQUA", itemsToCount);
      // if (results[item]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("Yiqi", 2));
