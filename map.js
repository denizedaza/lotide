const words = ["ground", "control", "to", "major", "tom"];

const map1 = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

const results1 = map1(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("The two arrays are equal");
  } else {
    console.log("The two arrays entered do not match");
  }
};

const eqArrays = function(array1, array2) {
  let result = false;

  if (array1.length === array2.length) {
    
    if (array1.every((v, i) => v === array2[i])) {
      result = true;
    }
  }
  return result;
};

const test1 = ["make", "dive", "fish", "meet"];
const test2 = ["yellow", "blue", "green", "orange", "red"];
const test3 = ["Hiking", "boating", "Surfing"];

assertArraysEqual(map1(words, word => word.length), [4, 4, 4, 4]);
assertArraysEqual(map1(words, word => word[1]), ['e', 'l', 'r', 'r', 'e']);
assertArraysEqual(map1(words, word => word[0]), ['H', 'b', 'S']);