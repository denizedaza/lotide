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

module.exports = letterPositions;