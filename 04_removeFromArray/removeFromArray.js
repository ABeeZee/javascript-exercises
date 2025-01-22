const removeFromArray = function (array, ...toRemove) {
  const newArray = [];
  array.forEach((item) => {
    if (!toRemove.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// declare empty array
// taking each item in the first perameter, push them to the empty array UNLESS it is included in the second perameter(s)
// return newArray

// Do not edit below this line
module.exports = removeFromArray;

// THE ARGUMENTS OBJECT:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

// REST PARAMETERS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// SPREAD OPERATOR:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
