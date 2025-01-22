const add = function (numAdd1, numAdd2) {
  let answer = numAdd1 + numAdd2;
  return answer;
};

const subtract = function (numSubtract1, numSubtract2) {
  let answer = numSubtract1 - numSubtract2;
  return answer;
};

const sum = function (sumArray) {
  let answer = 0;
  for (let i = 0; i < sumArray.length; i++) {
    answer += sumArray[i];
  }
  return answer;
};

const multiply = function (multiplyArray) {
  let answer = 1;
  for (let i = 0; i < multiplyArray.length; i++) {
    answer = multiplyArray[i] * answer;
  }
  return answer;
};

const power = function (num1, toPower) {
  let answer = Math.pow(num1, toPower);
  return answer;
};

const factorial = function (num) {
  let answer = 1;
  for (let i = 1; i <= num; i++) {
    answer = answer * i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
