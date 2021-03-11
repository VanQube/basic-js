const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {

    let recurs_Depth = 0;
    let counter = 1;
    arr.forEach((bracket) => {
      if (Array.isArray(bracket)) {
        counter = this.calculateDepth(bracket);
        if (recurs_Depth < counter) recurs_Depth = counter;
      }
    })
    return recurs_Depth + 1
  }

};

