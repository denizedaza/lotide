const eqArrays = function (array1, array2) {
  let result = false;

  if (array1.length === array2.length) {

    if (array1.every((v, i) => v === array2[i])) {
      result = true;
    }
  }
  return result;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("The two arrays are equal");
  } else {
    console.log("The two arrays entered do not match");
  }
}

const flatten = function (array) {
  let outputArray = [];

  for (let elem of array) {
    // console.log("elem:", elem);
    if (Array.isArray(elem)) {
      for (let nested of elem) {
        // console.log("nested:", nested);
        outputArray.push(nested);
      }
    } else {
      outputArray.push(elem);
    }
  }
  return outputArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
