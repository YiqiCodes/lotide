const assertEqual = function(actual, expected) {
  // console.log("BLACK", actual);
  // console.log("WHITE", expected);

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  // console.log("SILVER", allItems);
  // console.log("MAGENTA", itemsToCount);

  const results = {};

  for (const item of allItems) {
    // console.log("YELLOW", item);
    // console.log("ORANGE", allItems);
    if (itemsToCount[item]) {
      console.log("VIOLET", itemsToCount[item]);
      console.log("AQUA", itemsToCount);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
    // console.log("BROWN", results);
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true
});
// console.log("GRAY", result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
