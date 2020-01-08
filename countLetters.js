const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  const results = {};
  console.log("BLACK", results);

  for (const letter of word) {
    console.log("WHITE", letter);
    console.log("GRAY", word);
    console.log("GRAY", word[letter]);
    if (results[letter]) {
      results[letter] += 1;
      console.log("GOLD", results[letter]);
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("yiqi"));
