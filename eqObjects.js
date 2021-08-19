const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}✅✅`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false