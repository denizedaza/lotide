const flatten = function (array) {
  let outputArray = [];

  for (let elem of array) {
    // console.log("elem:", elem);
    if (Array.isArray(elem)) {
      for (let nested of elem) {
        // console.log("nested:", nested);
        outputArray.push(nested);
      }
    } else {
      outputArray.push(elem);
    }
  }
  return outputArray;
}

module.exports = flatten;
