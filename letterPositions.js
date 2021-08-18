const letterPositions = function(sentence) {
  const results = {};
  // const noSpace = sentence.split(" ").join("");

  for (let i = 0; i < sentence.length; i++) {
    // console.log("results at string at 1:", results[noSpace[i]]);
    console.log("string at i:", sentence[i]); //prints letter
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("The two arrays are equal");
  } else {
    console.log("The two arrays entered do not match");
  }
};

console.log(letterPositions("lighthouse in the house"));