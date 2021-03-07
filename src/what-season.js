const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();

    let month = date.getMonth();
    if (month < 2 || month === 11) return 'winter';
    if (month < 5) return 'spring';
    if (month < 8) return 'summer';
    if (month < 11) return 'autumn';

};
