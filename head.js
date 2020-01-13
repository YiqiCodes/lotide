// FUNCTION IMPLEMENTATION
const assertEqual = require("./assertEqual");
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const head = function(data) {
  console.log(data[0]);
};

module.exports = head;
