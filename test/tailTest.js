const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 6, 7 for ['5', '6', '7']", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("returns 'Lighthouse Lab' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });
});
