const findKey = function(object, callback) {
  const keysArray = Object.keys(object);
  for (const elem of keysArray) {
    // console.log("elem:", elem);
    // console.log("object at array key test:", object[elem].stars);
    // console.log("callback w elem", callback(object[elem]));
    if (callback(object[elem])) {
      return elem;
    }
  }
};

module.exports = findKey;