const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return [0] for h in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("should return [2, 3] for l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
});