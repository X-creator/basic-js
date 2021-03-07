const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;

    let arr = members.map((member) => {
        if (typeof member === 'string') return member.trim().charAt(0).toUpperCase();
    });
    return arr.sort().join('');
};
