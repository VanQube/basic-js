const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }
    
    let target = '[';

    let pos = 0;
    let counter = 0;
    while (true) {
      let foundPos = arr.indexOf(target, pos);

      pos = foundPos + 1;
      counter += 1
    }
    return counter
  }

};
