const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("The two arrays are equal");
  } else {
    console.log("The two arrays entered do not match");
  }
};

module.exports = assertArraysEqual;