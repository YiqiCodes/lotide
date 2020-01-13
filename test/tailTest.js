const assertEqual = require("../assertEqual");
const tail = require("../tail.js");

assertEqual(tail([5, 6, 7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
