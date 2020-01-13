const assertEqual = require("./assertEqual");

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(data) {
  console.log(data.slice(1));
};

assertEqual(tail([5, 6, 7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = tail;
