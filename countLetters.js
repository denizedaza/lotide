const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}✅✅`);
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected} 🛑🛑`);
  }
};

const countLetters = function(string) {
  let results = {};
  let noSpace = string.split(" ").join("");

  for (const charac of noSpace) {
    // console.log("charac:", charac);
    // console.log("results at charac:", results[charac], typeof results[charac]);
    if (!results[charac]) {
      results[charac] = 1;
    } else {
      results[charac] += 1;
    }
    // console.log("results at charac:", results[charac]);
  }

  return results;
};

console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house"),{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});