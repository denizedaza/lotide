const eqArrays = function(array1, array2) {
  let result = false;

  if (array1.length === array2.length) {
    
    if (array1.every((v, i) => v === array2[i])) {
      result = true;
    }
  }
  return result;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("The two arrays are equal");
  } else {
    console.log("The two arrays entered do not match");
  }
};

const middle = function(array) {
  const middleIndex = Math.floor((array.length - 1) / 2);
  // console.log("middle index:", middleIndex);
  let outputArray = [];

  if (array.length <= 2) {
    outputArray.length = 0;
  } else if (array.length % 2 !== 0) {
    outputArray.push(array[middleIndex]);
  } else if (array.length % 2 === 0) {
    outputArray.push(array[middleIndex], array[middleIndex + 1]);
  }
  // console.log("array at middle index var:", array[middleIndex]);
  // console.log("output array:", outputArray);
  return outputArray;
};

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