const fibonacci = function (place) {
  let intPlace = parseInt(place);

  if (intPlace < 0) return "OOPS";
  if (intPlace == 0) return 0;

  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i <= intPlace; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
