const getTimeZone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
module.exports = getTimeZone;