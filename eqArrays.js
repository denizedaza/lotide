const eqArrays = function(array1, array2) {
  let result = false;

  if (array1.length === array2.length) {
    
    if (array1.every((v, i) => v === array2[i])) {
      result = true;
    }
  }
  return result;
};

module.exports = eqArrays;