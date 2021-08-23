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

module.exports = countLetters;