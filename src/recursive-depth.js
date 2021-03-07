const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr, level = 1, result = 0) {

        for (let item of arr) {
            if (Array.isArray(item)) {
                result = this.calculateDepth(item, ++level, result);
                level--;
            }
        }
        return Math.max(level, result);
    }
};