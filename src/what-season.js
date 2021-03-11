const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let new_date = new Date(date)
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    
    try {
        date.getTime()
    } catch (error) {
        throw new Error(error)
    }

    let month = new_date.getMonth();
    let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']

    return season[month]
};
