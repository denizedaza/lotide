const takeUntil = function(array, callback) {
  let outputArray = [];
  //  array.forEach((element, index) => {
  //     // console.log("element:", element);
  //     // console.log("callback:", callback(element));
  //     // if (!callback(element)) outputArray.push(element);

  //   })
  for (let elem of array) {
    // console.log("elem:", elem);
    if (callback(elem)) break;
    outputArray.push(elem);
  }
    
  return outputArray;
  // return array.filter(element => !callback(element));
};

module.exports = takeUntil;