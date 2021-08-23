const without = function(source, itemsToRemove) {

  // let array = [];
  let newArray = source.filter((el) => {
    // console.log("debugging:", el, itemsToRemove, !itemsToRemove.includes(el), typeof el);
    return !itemsToRemove.includes(el)
  })
  console.log("new array:", newArray);
}

module.exports = without;