const assert = require('chai');
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("should return drama for The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("should return undefined for That 70's Show", () => {
    assert.strictEqual((findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined));
  });
});