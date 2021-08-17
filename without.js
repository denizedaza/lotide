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

const without = function(source, itemsToRemove) {

  // let array = [];
  let newArray = source.filter((el) => {
    // console.log("debugging:", el, itemsToRemove, !itemsToRemove.includes(el), typeof el);
    return !itemsToRemove.includes(el)
  })
  console.log("new array:", newArray);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]