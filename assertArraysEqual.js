const eqArrays = function(first, second) {
  if (first === second) console.log(true);
  if (first == null || second == null) console.log(false);
  if (first.length != second.length) console.log(false);

  for (let i = 0; i < first.length; ++i) {
    if (first[i] !== second[i]) console.log(false);
  }
  console.log(true);
};

eqArrays([1, 2, 3], [1, 2, 3]);
