const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]); // => []
middle([1, 2]); // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);