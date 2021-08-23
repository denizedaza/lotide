const eqObjects = function (object1, object2) {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  let result = false;

  if (obj1Keys.length !== obj2Keys.length) {
    console.log("Objects aren't the same length. They're not equal. False")
    result = false;
    //process.exit();
  } else {
    for (let obj1 of obj1Keys) {
      console.log("obj1:", obj1);
      console.log("obj1 value:", object1[obj1]);
      console.log("obj2 value:", object2[obj1]);
      if (Array.isArray(object1[obj1]) && Array.isArray(object2[obj1])){
        eqArrays(object1[obj1], object2[obj1]);
      } else if (object1[obj1] !== object2[obj1]) {
        console.log("The key/value pairs don't match. Therefore, false");
        result = false;
      }
    }
    console.log("Objects are identical: true");
    result = true;
  }
  // console.log(typeof result);
  return result;
};

const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Passed: ${actual} !== ${expected}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};

module.exports = assertObjectsEqual;