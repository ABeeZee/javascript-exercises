const convertToCelsius = function (f) {
  let fahrenheit = (f - 32) * (5 / 9);
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
};

const convertToFahrenheit = function (c) {
  let celcius = c * (9 / 5) + 32;
  let celciusRounded = Math.round(celcius * 10) / 10;
  return celciusRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
