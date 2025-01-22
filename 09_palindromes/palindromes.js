const palindromes = function (str) {
  let newStr = str
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, "");
  let reverseStr = newStr.split("").reverse().join("");
  if (newStr == reverseStr) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
