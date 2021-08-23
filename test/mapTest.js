const map = require('../map');
const assert = require('chai').assert;

// const words = ["ground", "control", "to", "major", "tom"];

// const test1 = ["make", "dive", "fish", "meet"];
// const test2 = ["yellow", "blue", "green", "orange", "red"];
// const test3 = ["Hiking", "boating", "Surfing"];

// assertArraysEqual(map1(words, word => word.length), [4, 4, 4, 4]);
// assertArraysEqual(map1(words, word => word[1]), ['e', 'l', 'r', 'r', 'e']);
// assertArraysEqual(map1(words, word => word[0]), ['H', 'b', 'S']);

describe("#map", () => {
  const words1 = ["ground", "control", "to", "major", "tom"];
  it("should return [ 'g', 'c', 't', 'm', 't' ] for 'words1, word => word[0]'", () => {
    assert.deepEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });
  const words2 = ["just", "testing"];
  it("should return [ 'u', 'e' ] for 'words2, word => word[1]'", () => {
    assert.deepEqual(map(words2, word => word[1]), [ 'u', 'e' ]);
  });
  const numbers = [1, 2, 3, 4, 5];
  it("should return [ 2, 4, 6, 8, 10 ] for 'numbers, nb => nb * 2'", () => {
    assert.deepEqual(map(numbers, nb => nb * 2), [ 2, 4, 6, 8, 10 ]);
  });
});