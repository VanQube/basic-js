const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(elem => elem.forEach(elem => {if (elem == '^^') counter++
  }));
  return counter;
};
