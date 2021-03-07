const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

    let {
        repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
    } = options;

    let additionStr = Array.from({length: additionRepeatTimes}, () => String(addition)).join(additionSeparator);
    return Array.from({length: repeatTimes}, () => `${str}${additionStr}`).join(separator);
};
  