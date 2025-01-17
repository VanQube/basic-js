const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  return arr.reduce((result, element, i) => {
    switch(element) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
        return result;
    }

    if (arr[i - 1] === '--discard-next') {
      return result;
    }

    if (arr[i - 1] === '--double-next') {
      result.push(element, element)
    } else {
      result.push(element);
    }

    switch(arr[i + 1]) {
      case '--double-prev':
        result.push(element);
        break;
      case '--discard-prev':
        result.splice(result.length-1,1);
        break;
    }

    return result;
  }, []);
};
