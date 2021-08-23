const middle = require('../middle');
const assert = require('chai').assert;

// // For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]); // => []
// middle([1, 2]); // => []
// // For arrays with odd number of elements, an array containing a single middle element should be returned.

// middle([1, 2, 3]); // => [2]
// middle([1, 2, 3, 4, 5]); // => [3]

// // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

describe("#middle", () => {
  it("returns an empty array [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns an array with a single middle element for arrays with an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns an array with a single middle element for arrays with an odd number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns an array with two middle elements for arrays with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns an array with two middle elements for arrays with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});