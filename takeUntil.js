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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);