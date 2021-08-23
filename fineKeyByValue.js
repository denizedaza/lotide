const findKeyByValue = function(object, value) {
  const keysArray = Object.keys(object);
  // console.log("keysArray:", keysArray);

  let output = "";
  for (const elem of keysArray) {
    // console.log("elem:", elem);

    if (Object.values(object).includes(value)){
      output = elem;
    } else {
      output = undefined;
    }
  }
  return output;
};

module.exports = findKeyByValue;