const eqArrays = function (array1, array2) {
  let result = false;

  if (array1.length === array2.length){
    
    if (array1.every((v, i) => v === array2[i])) {
      result = true;
    }
  }
  return result;
};

const assertArraysEqual = function (array1, array2){
  if (eqArrays(array1, array2)){
    console.log("The two arrays are equal");
  } else {
    console.log("The two arrays entered do not match");
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);