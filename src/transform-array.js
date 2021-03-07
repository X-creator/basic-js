const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();

    let len,
        transformedArr = [],
        controlSeq = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    for (let i = 0; i < arr.length; i++) {

        switch (arr[i]) {
            case controlSeq[0]:
                transformedArr.push('#');
                i++;
                break;

            case controlSeq[1]:
                transformedArr.pop();
                break;

            case controlSeq[2]:
                if (arr[i + 1] !== undefined) transformedArr.push(arr[i + 1]);
                break;

            case controlSeq[3]:
                if (len = transformedArr.length) transformedArr.push(transformedArr[len - 1]);
                break;

            default:
                transformedArr.push(arr[i]);
        }
    }
    return transformedArr.filter((item) => item !== '#');
};
