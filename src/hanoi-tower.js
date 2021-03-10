const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns1 = ((2 ** disksNumber) - 1);
  let seconds1 = Math.floor((3600 / turnsSpeed) * turns1);
  return {turns : turns1, seconds : seconds1}
};
