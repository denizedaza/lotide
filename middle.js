const middle = function(array) {
  const middleIndex = Math.floor((array.length - 1) / 2);
  // console.log("middle index:", middleIndex);
  let outputArray = [];

  if (array.length <= 2) {
    outputArray.length = 0;
  } else if (array.length % 2 !== 0) {
    outputArray.push(array[middleIndex]);
  } else if (array.length % 2 === 0) {
    outputArray.push(array[middleIndex], array[middleIndex + 1]);
  }
  // console.log("array at middle index var:", array[middleIndex]);
  // console.log("output array:", outputArray);
  return outputArray;
};

module.exports = middle;