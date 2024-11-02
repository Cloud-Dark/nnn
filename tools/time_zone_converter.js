const timeZoneConverter = (date, fromZone, toZone) => {
    return {
        originalDate: date,
        fromZone,
        toZone,
        convertedDate: new Date(date).toISOString() // Simple conversion for mock
    };
};
module.exports = timeZoneConverter;