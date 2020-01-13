const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    middle = [];
  } else if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(array.length / 2 + 1);
    middle.push(middleIndex);
  } else if (array.length % 2 === 0) {
    let leftIndex = array.length / 2;
    middle.push(leftIndex);
    let rightIndex = array.length / 2 + 1;
    middle.push(rightIndex);
  }
  return middle;
};

module.exports = middle;
