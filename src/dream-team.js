const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let array = []
    if (members == undefined) {
        return false
    } else if (!Array.isArray(members)) {
        return false
    } else {
        for (let item of members) {
            if (typeof item == 'string') {
                item = item.trim()[0].toUpperCase();
                array.push(item);
            }
        }
        return array.sort().join('')
    }
};



